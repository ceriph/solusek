import {Modifier} from "./modifier";

export class Equipment {
  name: string;
  label: string;
  desc: string;
  type: EquipmentType;
  proficiency: string;
  subtype: string;
  modifiers: Modifier[];
}

export enum EquipmentType {
  Armour,
  Shield,
  Tool,
  Weapon,
}
