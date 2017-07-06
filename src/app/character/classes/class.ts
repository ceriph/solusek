import {Skill} from "../skill";
import {Equipment} from "../equipment";

export class Class {
  name: string;
  label: string;
  desc: string;
  hit: number;
  proficiencies: string;
  skills: Skill[];
  equipment: string[];
  archetypes: Archetype[];
}

export class Archetype {
  label: string;
  desc: string;
}
