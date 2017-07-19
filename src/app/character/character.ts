import {Modifier} from "./modifier";
import {PrimaryStats, SecondaryStats} from "./stats/stats";
import {Info} from "./info/info";
import {ClassSkill} from "./classes/class";

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
  checks: Checks
}

export class Checks {
  perception: number;
  investigation: number;
  knowledge: number;
  lockpicking: number;
  pickpocketing: number;
  stealth: number;
}
