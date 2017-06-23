import {Skill} from "./skill";
import {Modifier} from "./modifier";
import {SecondaryStats, Stats} from "./stats";
import {Info} from "./info/info";
import {Equipment} from "./equipment";

export class Character {
  level: number;
  experience: number;
  class: string;
  race: string;
  stats: Stats;
  info: Info;
  modifiers: Modifier[];
  skills: Skill[];
  equipment: Equipment[];
  primary: Stats; // calculated by statService
  secondary: SecondaryStats; // calculated by statService
}
