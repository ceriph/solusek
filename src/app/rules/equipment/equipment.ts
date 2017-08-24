import {Modifier} from "../../character/modifier";

export class Item {
  name: string;
  label: string;
  desc: string;
  type: ItemType;
  rarity: Rarity = Rarity.Common;
  proficiency: string;
  subtype: string;
  damage: string;
  range: number;
  modifiers: Modifier[];
}

export enum ItemType {
  Armour,
  Shield,
  Tool,
  Weapon,
  Footwear,
  Ring,
  Amulet,
  Gloves,
  Headgear,
  Misc
}

export enum Rarity {
  Common,
  Uncommon,
  Rare,
  Epic,
  Legendary
}
