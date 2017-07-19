import {Modifier} from "../../character/modifier";
import {Skill} from "../skills/skill";
export class Race {
  name: string;
  label: string;
  desc: string;
  modifiers: Modifier[];
  skills: Skill[];
}
