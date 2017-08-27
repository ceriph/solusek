export class Spell {
  label: string;
  school: School;
  classes: string[]
  rank: number;
  castTime: string;
  duration: string;
  range: string;
  desc: string;
}

export class SpellGroup {
  label: string;
  desc: string;
  ranks: Rank[];
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
