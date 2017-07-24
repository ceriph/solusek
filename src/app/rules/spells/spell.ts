import {SkillRecovery, SkillType} from "../skills/skill";
export class Spell {
  label: string;
  school: School;
  recovery: SkillRecovery = SkillRecovery.None;
  type: SkillType;
  desc: string;
}

export class SpellGroup {
  label: string;
  desc: string;
  ranks: SpellRank[];
}

export class SpellRank {
  rank: number;
  spells: Spell[];
}

export enum CastTime {
  Action,
  BonusAction
}

export enum School {
  Abjuration,
  Alteration,
  Conjuration,
  Evocation,
  Illusion
}
