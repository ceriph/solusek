import {SkillRecovery, SkillType} from "../skills/skill";
export class Spell {
  label: string;
  school: School;
  recovery: SkillRecovery = SkillRecovery.None;
  group: SpellClass;
  rank: number;
  castTime: SkillType;
  duration: string;
  desc: string;
}

export class SpellGroup {
  label: string;
  desc: string;
  ranks: Rank[];
}

export enum SpellClass {
  Arcane,
  Dark,
  Light,
  Mind,
  Nature
}

export class Rank {
  rank: number;
  spells: Spell[];
}

export enum School {
  Abjuration,
  Alteration,
  Conjuration,
  Divination,
  Evocation,
  Illusion
}

export class Slots {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
}
