import {Modifier} from "../../character/modifier";

export class Item {
  name: string;
  label: string;
  desc: string;
  slot: ItemSlot = ItemSlot.None;
  proficiency: string;
  subtype: string;
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
