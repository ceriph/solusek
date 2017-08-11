export class Class {
  name: string;
  label: string;
  desc: string;
  hit: number;
  type: string;
  spellMod: string;
  proficiencies: string;
  skills: ClassSkill[];
  equipment: string[];
  archetypes: Archetype[];
}

export enum Type {
  Caster,
  Hybrid,
  Skill
}

export class Archetype {
  label: string;
  desc: string;
  skills: ClassSkill[];
}

export class ClassSkill {
  level: number;
  name: string;
}
