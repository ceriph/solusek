import {Skill} from "./skill";
import {Modifier} from "./modifier";
import {SecondaryStats, PrimaryStats} from "./stats";
import {Info} from "./info/info";

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
  primaryStats: PrimaryStats; // calculated by statService
  secondaryStats: SecondaryStats; // calculated by statService
}
