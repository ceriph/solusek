import {Race} from "./races/race";
import {Class} from "./classes/class";
import {Ability} from "./ability";

export class Character {
  level: number;
  experience: number;
  name: string;
  age: number;
  class: Class;
  race: Race;
  stats: {
    str: number;
    con: number;
    agi: number;
    int: number;
    spi: number;
    cha: number;
  };
  info: {
    name: string;
    age: number;
    appearance: string;
    personality: string;
    background: string;
    motivation: string;
    hidden: string;
  }
  abilities: Ability[];
}
