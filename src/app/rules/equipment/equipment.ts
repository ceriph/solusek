import {Modifier} from "../../character/modifier";

export class Item {
  name: string;
  label: string;
  desc: string;
  slot: ItemSlot = ItemSlot.None;
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
}

export enum ItemSlot {
  Head,
  Body,
  Feet,
  Hands,
  Jewellery,
  Hand,
  None
}

export enum Rarity {
  Common,
  Uncommon,
  Rare,
  Epic,
  Legendary
}
