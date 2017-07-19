export class Class {
  name: string;
  label: string;
  desc: string;
  hit: number;
  proficiencies: string;
  skills: ClassSkill[];
  equipment: string[];
  archetypes: Archetype[];
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

