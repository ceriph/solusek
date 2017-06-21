import {Skill} from "../skill";

export class Class {
  name: string;
  label: string;
  desc: string;
  hit: number;
  proficiencies: string;
  skills: Skill[];
}
