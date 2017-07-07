export class Poison {
  label: string;
  desc: string;
  ingredients: string;
}

export class PoisonRank {
  rank: number;
  poisons: Poison[];
}
