export class Skill {
  name: string;
  label: string;
  type: SkillType = SkillType.Passive;
  recovery: SkillRecovery = SkillRecovery.None;
  desc: string;
}

export enum SkillType {
  Action,
  BonusAction,
  Passive,
  Reaction,
  Misc
}

export enum SkillRecovery {
  ShortRest,
  LongRest,
  Round,
  None
}
