import {Injectable} from "@angular/core";
import {SecondaryStats, PrimaryStats} from "./stats";
import {Character, Checks, Saves} from "../character";
import {Race} from "../../rules/races/race";
import {Class} from "../../rules/classes/class";
import {Modifier} from "../modifier";
import {EquipmentService} from "../../rules/equipment/equipment.service";
import {SkillService} from "../../rules/skills/skill.service";
import {SkillType} from "../../rules/skills/skill";

@Injectable()
export class StatService {

  constructor(private equipmentService: EquipmentService,
              private skillService: SkillService) {
  }

  calculateAvailable(character: Character, stats: PrimaryStats): number {
    let initial = 5;
    if (character.race === "human") {
      initial = 10;
    }
    const current = stats.str + stats.con + stats.agi + stats.int + stats.spi + stats.cha;
    return initial - (current - 6) + (character.level - 1);
  }

  calculateModifiers(character: Character, race: Race): PrimaryStats {
    const base = {
      str: 0,
      con: 0,
      agi: 0,
      int: 0,
      spi: 0,
      cha: 0
    };

    if (race.modifiers) {
      const modifiers = race.modifiers.concat(character.modifiers);

      for (const modifier of modifiers) {
        if (modifier) {
          base[modifier.name] += modifier.value;
        }
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
    character.saves = new Saves();

    // modifiers from race
    this.applyModifiers(character, race.modifiers);

    // modifiers from class skills
    clazz.skills.filter(classSkill => classSkill.level <= character.level).forEach(classSkill => {
      this.skillService.get(classSkill.name).subscribe(skill => {
        if (skill.modifiers) {
          this.applyModifiers(character, skill.modifiers);
        }
      });
    });

    // modifiers from equipment
    if (character.equipment.head) {
      this.equipmentService.get(character.equipment.head).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.body) {
      this.equipmentService.get(character.equipment.body).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.feet) {
      this.equipmentService.get(character.equipment.feet).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.hands) {
      this.equipmentService.get(character.equipment.hands).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.lefthand) {
      this.equipmentService.get(character.equipment.lefthand).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.righthand) {
      this.equipmentService.get(character.equipment.righthand).subscribe(item => {
        this.applyModifiers(character, item.modifiers);
      });
    }
    if (character.equipment.jewellery) {
      for (const itemName of character.equipment.jewellery) {
        this.equipmentService.get(itemName).subscribe(item => {
          this.applyModifiers(character, item.modifiers);
        });
      }
    }

    // checks
    character.checks.investigation += character.primaryStats.int;
    character.checks.knowledge += character.primaryStats.int;
    character.checks.thievery += character.primaryStats.agi;
    character.checks.perception += character.primaryStats.spi;
    character.checks.persuasion += character.primaryStats.cha;
    character.checks.stealth += character.primaryStats.agi;

    // saves
    character.saves.str += character.primaryStats.str;
    character.saves.con += character.primaryStats.con;
    character.saves.agi += character.primaryStats.agi;
    character.saves.int += character.primaryStats.int;
    character.saves.spi += character.primaryStats.spi;
    character.saves.cha += character.primaryStats.cha;

    // todo tidy racial passives as modifiers eventually

    // health
    character.secondaryStats.health += this.getHealth(character, clazz);

    // dodge
    character.secondaryStats.dodge += 10 + character.primaryStats.agi;
    if (character.race === "halfling") {
      character.secondaryStats.dodge += 1; // todo level increases?
    }

    // speed
    character.secondaryStats.speed += this.getSpeed(character.primaryStats.agi);

    if (character.race === "woodelf") {
      character.secondaryStats.speed += 2;
    }

    // armour
    if (character.race === "iksar") {
      character.secondaryStats.armour += 1; // todo level increases?
    }

    // attack
    character.secondaryStats.attack += character.primaryStats.agi;

    // spell attack and dc
    if (clazz.spellMod) {
      character.secondaryStats.spelldc += 8 + character.primaryStats[clazz.spellMod];
      if (character.class !== "rogue") {
        character.secondaryStats.spellattack += character.primaryStats[clazz.spellMod];
      } else {
        character.secondaryStats.spelldc += 2;
      }
    }
  }

  private applyModifiers(character: Character, modifiers: Modifier[]) {
    if (modifiers) {
      for (const modifier of modifiers) {
        if (this.isPrimary(modifier.name)) {
          character.primaryStats[modifier.name] += modifier.value;
        } else if (this.isSecondary(modifier.name)) {
          character.secondaryStats[modifier.name] += modifier.value;
        } else if (this.isCheck(modifier.name)) {
          character.checks[modifier.name] += modifier.value;
        } else if (this.isSave(modifier.name)) {
          const stat = modifier.name.substring(4);
          character.saves[stat] += modifier.value;
        }
      }
    }
  }

  private isPrimary(stat) {
    return stat === 'str' || stat === 'con' || stat === 'agi' || stat === 'int' || stat === 'spi' || stat === 'cha';
  }

  private isSecondary(stat) {
    return stat === 'health' || stat === 'dodge' || stat === 'armour' || stat === 'spellarmour' || stat === 'attack' || stat === 'spellattack' || stat === 'spelldc' || stat === 'damage';
  }

  private isCheck(stat) {
    return stat === 'investigation' || stat === 'knowledge'  || stat === 'thievery'
      || stat === 'perception' || stat === 'persuasion' || stat === 'stealth';
  }

  private isSave(stat) {
    return stat === 'savestr' || stat === 'savecon' || stat === 'saveagi' || stat === 'saveint' || stat === 'savespi' || stat === 'savecha';
  }

  private getSpeed(agility) {
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

  private getHealth(character, clazz) {
    let hitDice = clazz.hit;
    if (character.race === 'dwarf') {
      hitDice += 5;
    }

    return Math.floor((hitDice + character.primaryStats.con) + ((character.level - 1) * ((hitDice / 2) + character.primaryStats.con)));
  }
}
