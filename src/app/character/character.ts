import {Skill} from "./skill";
import {Modifier} from "./modifier";
import {SecondaryStats, PrimaryStats} from "./stats/stats";
import {Info} from "./info/info";
import {Equipment} from "./equipment";

export class Character {
  level: number;
  experience: number;
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
