import {Injectable} from "@angular/core";
import {Stats} from "../stats";
import {Character} from "../character";
import {Race} from "../races/race";

@Injectable()
export class StatService {

  constructor() {}

  static calculateAvailable(character: Character, stats: Stats): number {
    let initial = 5;
    if(character.race === "human") {
      initial = 10;
    }
    let current = stats.str + stats.con + stats.agi + stats.int + stats.spi + stats.cha;
    return initial - (current - 6) + (character.level - 1);
  }

  static calculatePrimaryStats(character: Character, race: Race): Stats {
    let base = character.stats;

    let modifiers = race.modifiers.concat(character.modifiers);

    for (let modifier of modifiers) {
      if(modifier)
        base[modifier.name] += modifier.modifier;
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
      if(modifier)
        base[modifier.name] += modifier.modifier;
    }

    return base;
  }
}
