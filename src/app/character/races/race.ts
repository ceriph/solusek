import {Skill} from "../skill";
import {Modifier} from "../modifier";
export class Race {
  name: string;
  label: string;
  desc: string;
  modifiers: Modifier[];
  skills: Skill[];
}
