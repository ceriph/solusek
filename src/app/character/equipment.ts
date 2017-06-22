import {Modifier} from "./modifier";

export class Weapon {
  proficiency: string;
  hands: number;
  base: number;
  range: number;
}

export class Armour {
  proficiency: string;
  base: number
}

export class Proficiency {
  name: string;
  label: string;
}

export class Equipment {
  name: string;
  label: string;
  desc: string;
  type: string;
  subtype: string;
  bonus: number;
  modifiers: Modifier[];
}
