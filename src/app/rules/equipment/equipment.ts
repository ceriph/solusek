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
  attunement = false;
  modifiers: Modifier[];
}

export enum ItemType {
  Armour,
  Shield,
  Tool,
  Weapon,
  Footwear,
  Jellery,
  Gloves,
  Headgear,
  Misc,
  Cloak
}

export enum Rarity {
  Common,
  Uncommon,
  Rare,
  Epic,
  Legendary
}
