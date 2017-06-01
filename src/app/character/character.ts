import {Race} from "./races/race";

export class Character {
  level: number;
  experience: number;
  name: string;
  age: number;
  class: string;
  race: Race;
  stats: {
    str: number;
    con: number;
    agi: number;
    int: number;
    spi: number;
    cha: number;
  }

}
