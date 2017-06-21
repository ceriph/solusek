import {Injectable} from "@angular/core";
import {SecondaryStats, Stats} from "../stats";
import {Character} from "../character";
import {Race} from "../races/race";
import {Class} from "../classes/class";

@Injectable()
export class StatService {

  constructor() {
  }

  static calculateAvailable(character: Character, stats: Stats): number {
    let initial = 5;
    if (character.race === "human") {
      initial = 10;
    }
    let current = stats.str + stats.con + stats.agi + stats.int + stats.spi + stats.cha;
    return initial - (current - 6) + (character.level - 1);
  }

  static calculatePrimaryStats(character: Character, race: Race): Stats {
    let base = new Stats();
    base.str = character.stats.str;
    base.con = character.stats.con;
    base.agi = character.stats.agi;
    base.int = character.stats.int;
    base.spi = character.stats.spi;
    base.cha = character.stats.cha;

    let modifiers = race.modifiers;

    console.log(modifiers)
    for (let modifier of modifiers) {
      if (modifier) {
        console.log("calculating for", modifier)
        base[modifier.name] += modifier.modifier;
      }
    }

    return base;
  }

  static calculateModifiers(character: Character, race: Race): Stats {
    let base = {
      str: 0,
      con: 0,
      agi: 0,
      int: 0,
      spi: 0,
      cha: 0
    };

    let modifiers = race.modifiers.concat(character.modifiers);

    for (let modifier of modifiers) {
      if (modifier)
        base[modifier.name] += modifier.modifier;
    }

    return base;
  }

  static calculateSecondaryStats(character: Character, race: Race, clazz: Class): SecondaryStats {
    let base = new SecondaryStats()

    if (character.race === "woodelf") {
      base.movement += 2;
    }

    if (character.race === "dwarf") {
      base.health += character.level * 5;
    }

    if (character.race === "halfling") {
      base.dodge += 1; // todo add level inc
    }

    if (character.race === "iksar") {
      base.armour += 1; // todo as above
    }

    let primary = this.calculatePrimaryStats(character, race);

    base.health += (primary.con + clazz.hit) + ((character.level - 1) * (primary.con + Math.floor(clazz.hit / 2)));
    base.dodge += primary.agi;
    base.movement += primary.agi + 1;

    return base;
  }
}
