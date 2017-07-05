export class Spell {
  label: string;
  school: School;
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

export enum School {
  Abjuration,
  Alteration,
  Conjuration,
  Evocation,
  Illusion
}
