import {Modifier} from "./modifier";
import {PrimaryStats, SecondaryStats} from "./stats/stats";
import {Info} from "./info/info";
import {ClassSkill} from "../rules/class/class";

export class Character {
  level: number = 0;
  experience: number = 0;
  gold: number = 0;
  class: string;
  race: string;
  baseStats: PrimaryStats;
  info: Info;
  modifiers: Modifier[];
  skills: ClassSkill[];
  equipment: string[];
  inventory: string[];
  primaryStats: PrimaryStats; // calculated by statService
  secondaryStats: SecondaryStats; // calculated by statService
  checks: Checks;
  saves: Saves;
}

export class Checks {
  investigation: number = 0;
  knowledge: number = 0;
  lockpicking: number = 0;
  perception: number = 0;
  persuasion: number = 0;
  pickpocketing: number = 0;
  stealth: number = 0;
}

export class Saves {
  str: number = 0;
  con: number = 0;
  agi: number = 0;
  int: number = 0;
  spi: number = 0;
  cha: number = 0;
}
