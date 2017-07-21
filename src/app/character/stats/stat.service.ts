import {Injectable} from "@angular/core";
import {SecondaryStats, PrimaryStats} from "./stats";
import {Character, Checks} from "../character";
import {Race} from "../../rules/race/race";
import {Class} from "../../rules/class/class";
import {Modifier} from "../modifier";
import {EquipmentService} from "../../rules/equipment/equipment.service";

@Injectable()
export class StatService {

  constructor(private equipmentService: EquipmentService) {
  }

  calculateAvailable(character: Character, stats: PrimaryStats): number {
    let initial = 5;
    if (character.race === "human") {
      initial = 10;
    }
    let current = stats.str + stats.con + stats.agi + stats.int + stats.spi + stats.cha;
    return initial - (current - 6) + (character.level - 1);
  }

  calculateModifiers(character: Character, race: Race): PrimaryStats {
    let base = {
      str: 0,
      con: 0,
      agi: 0,
      int: 0,
      spi: 0,
      cha: 0
    };

    if (race.modifiers) {
      let modifiers = race.modifiers.concat(character.modifiers);

      for (let modifier of modifiers) {
        if (modifier)
          base[modifier.name] += modifier.value;
      }
    }

    return base;
  }

  calculate(character: Character, race: Race, clazz: Class) {
    character.primaryStats = new PrimaryStats();
    character.primaryStats.str = character.baseStats.str;
    character.primaryStats.con = character.baseStats.con;
    character.primaryStats.agi = character.baseStats.agi;
    character.primaryStats.int = character.baseStats.int;
    character.primaryStats.spi = character.baseStats.spi;
    character.primaryStats.cha = character.baseStats.cha;
    character.secondaryStats = new SecondaryStats();
    character.checks = new Checks();

    // modifiers from race
    StatService.applyModifiers(character, race.modifiers);

    // modifiers from equipment
    for (let itemName of character.equipment) {
      this.equipmentService.get(itemName).subscribe(item => {
        StatService.applyModifiers(character, item.modifiers);
      });
    }

    // checks
    character.checks.investigation += character.primaryStats.int;
    character.checks.knowledge += character.primaryStats.int;
    character.checks.lockpicking += character.primaryStats.agi;
    character.checks.pickpocketing += character.primaryStats.agi;
    character.checks.perception += character.primaryStats.spi;
    character.checks.persuasion += character.primaryStats.cha;
    character.checks.stealth += character.primaryStats.agi;

    for (let classSkill of clazz.skills) {
      if (classSkill.level <= character.level) {
        const modifier = Math.ceil(character.level / 3);
        // todo think of a better way of applying these
        if (classSkill.name === "bookworm") {
          character.checks.knowledge += modifier
        } else if (classSkill.name === "thievery") {
          character.checks.pickpocketing += modifier;
          character.checks.lockpicking += modifier;
        } else if (classSkill.name === "tracker") {
          character.checks.perception += modifier;
        }
      }
    }

    // todo tidy racial passives as modifiers eventually

    // health
    let hitDice = clazz.hit;
    if (character.race === 'dwarf') {
      hitDice += 5;
    }
    character.secondaryStats.health += Math.floor((hitDice + character.primaryStats.con) + ((character.level - 1) * ((hitDice / 2) + character.primaryStats.con)));

    // dodge
    character.secondaryStats.dodge += 10 + character.primaryStats.agi;
    if (character.race === "halfling") {
      character.secondaryStats.dodge += 1; // todo level increases?
    }

    // speed
    character.secondaryStats.speed += StatService.getSpeed(character.primaryStats.agi);

    if (character.race === "woodelf") {
      character.secondaryStats.speed += 2;
    }

    // armour
    if (character.race === "iksar") {
      character.secondaryStats.armour += 1; // todo level increases?
    }

    // attack
    character.secondaryStats.attack += character.primaryStats.agi;

    // spell attack and dc todo push the relevant spell stat into class model
    if (character.class === "wizard" || character.class === "enchanter" || character.class === "necromancer" || character.class === "reaver" || character.class === "rogue") {
      character.secondaryStats.spelldc += 10 + character.primaryStats.int;
    }

    if (character.class === "wizard" || character.class === "enchanter" || character.class === "necromancer" || character.class === "reaver") {
      character.secondaryStats.spellattack += character.primaryStats.int;
    }

    if (character.class === "cleric" || character.class === "druid" || character.class === "paladin" || character.class === "ranger") {
      character.secondaryStats.spellattack += character.primaryStats.spi;
      character.secondaryStats.spelldc += 10 + character.primaryStats.spi;
    }
  }

  private static applyModifiers(character: Character, modifiers: Modifier[]) {
    if (modifiers) {
      for (let modifier of modifiers) {
        if (StatService.isPrimary(modifier.name)) {
          character.primaryStats[modifier.name] += modifier.value;
        } else if (StatService.isSecondary(modifier.name)) {
          character.secondaryStats[modifier.name] += modifier.value;
        } else {
          character.checks[modifier.name] += modifier.value;
        }
      }
    }
  }

  private static isPrimary(stat) {
    return stat === 'str' || stat === 'con' || stat === 'agi' || stat === 'int' || stat === 'spi' || stat === 'cha';
  }

  private static isSecondary(stat) {
    return stat === 'health' || stat === 'dodge' || stat === 'armour' || stat === 'magicreduction' || stat === 'damage';
  }

  private static getSpeed(agility) {
    let speed = 1;

    while (agility > 0) {
      if (speed <= 5) {
        speed += 1;
      } else if (speed <= 10) {
        speed += 0.5;
      } else if (speed <= 15) {
        speed += 0.33;
      } else if (speed <= 20) {
        speed += 0.25;
      } else if (speed <= 25) {
        speed += 0.2;
      }
      agility--;
    }

    return Math.floor(speed);
  }
}
