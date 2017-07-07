export class Skill {
  name: string;
  label: string;
  level: number;
  type: SkillType;
  recovery: SkillRecovery;
  desc: string;
}

export enum SkillType {
  Action,
  Passive,
  Reaction
}

export enum SkillRecovery {
  ShortRest,
  LongRest,
  None
}
