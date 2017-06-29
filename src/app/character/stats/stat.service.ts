import {Injectable} from "@angular/core";
import {SecondaryStats, PrimaryStats} from "../stats";
import {Character} from "../character";
import {Race} from "../races/race";
import {Class} from "../classes/class";
import {Modifier} from "../modifier";
import {EquipmentService} from "../equipment.service";

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

    // modifiers from race
    StatService.applyModifiers(character, race.modifiers);

    // modifiers from equipment
    for(let itemName of character.equipment) {
      this.equipmentService.get(itemName).subscribe(item => {
        StatService.applyModifiers(character, item.modifiers);
      });
    }

    // todo tidy racial passives as modifiers eventually

    // health
    let hitDice = clazz.hit;
    if(character.race === 'dwarf') {
      hitDice += 5;
    }
    character.secondaryStats.health += (hitDice + character.primaryStats.con) + ((character.level - 1) * (hitDice + character.primaryStats.con));

    // dodge
    character.secondaryStats.dodge += 10 + character.primaryStats.agi;
    if(character.race === "halfling") {
      character.secondaryStats.dodge += 1; // todo level increases
    }

    // movement
    character.secondaryStats.movement += 1 + character.primaryStats.agi;
    if(character.race === "woodelf") {
      character.secondaryStats.movement += 2; // todo level increases
    }

    // armour
    if(character.race === "iksar") {
      character.secondaryStats.armour += 1; // todo level increases
    }
  }

  private static applyModifiers(character: Character, modifiers: Modifier[]) {
    if(modifiers) {
      for (let modifier of modifiers) {
        if (StatService.isPrimary(modifier.name)) {
          character.primaryStats[modifier.name] += modifier.value;
        } else {
          character.secondaryStats[modifier.name] += modifier.value;
        }
      }
    }
  }

  private static isPrimary(stat) {
    return stat === 'str' || stat === 'con' || stat === 'agi' || stat === 'int' || stat === 'spi' || stat === 'cha';
  }
}
