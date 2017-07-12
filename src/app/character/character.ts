import {Skill} from "./skill";
import {Modifier} from "./modifier";
import {SecondaryStats, PrimaryStats} from "./stats/stats";
import {Info} from "./info/info";
import {Equipment} from "./equipment";

export class Character {
  level: number = 0;
  experience: number = 0;
  gold: number = 0;
  class: string;
  race: string;
  baseStats: PrimaryStats;
  info: Info;
  modifiers: Modifier[];
  skills: Skill[];
  equipment: string[];
  inventory: string[];
  primaryStats: PrimaryStats; // calculated by statService
  secondaryStats: SecondaryStats; // calculated by statService
}
