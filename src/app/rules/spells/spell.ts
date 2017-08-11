import {SkillRecovery, SkillType} from "../skills/skill";
export class Spell {
  label: string;
  school: School;
  recovery: SkillRecovery = SkillRecovery.None;
  type: SkillType;
  duration: string;
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
  Divination,
  Evocation,
  Illusion
}

export class SpellSlots {

}
