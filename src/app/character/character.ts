import {Skill} from "./skill";
import {Modifier} from "./modifier";
import {Stats} from "./stats";
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
}
