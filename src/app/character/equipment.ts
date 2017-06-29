import {Modifier} from "./modifier";

export class WeaponBase {
  name: string;
  label: string;
  proficiency: string;
  hands: number;
  base: number;
  range: number;
  type: string;
}

export class ShieldBase {
  proficiency: string;
  base: number;
  dodge: number;
  movement: number;
  strength: number;
}

export class ArmourBase {
  proficiency: string;
  base: number;
  dodge: number;
  movement: number;
  strength: number;
}

export class ToolBase {
  name: string;
  label: string;
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
  modifiers: Modifier[];
}

export class Armour extends Equipment {
  base: ArmourBase;
}

export class Weapon extends Equipment {
  base: WeaponBase;
}

export class Shield extends Equipment {
  base: ShieldBase;
}
