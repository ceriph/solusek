import {Modifier} from "./modifier";

export class Equipment {
  name: string;
  label: string;
  desc: string;
  type: string;
  proficiency: string;
  subtype: string;
  modifiers: Modifier[];
}
