import {Modifier} from "./modifier";
import {PrimaryStats, SecondaryStats} from "./stats/stats";
import {Info} from "./info/info";
import {ClassSkill} from "../rules/classes/class";

export class Character {
  level: number = 0;
  experience: number = 0;
  gold: number = 0;
  class: string;
  archetype: string;
  race: string;
  baseStats: PrimaryStats;
  info: Info;
  modifiers: Modifier[];
  skills: ClassSkill[];
  equipment: Equipment;
  inventory: string[];
  primaryStats: PrimaryStats; // calculated by statService
  secondaryStats: SecondaryStats; // calculated by statService
  checks: Checks;
  saves: Saves;
  spellSlots: SpellSlot[];
  languages: string;
}

export class Equipment {
  head: string;
  body: string;
  feet: string;
  hands: string;
  jewellery: string[];
  lefthand: string;
  righthand: string;
}

export class Checks {
  investigation: number = 0;
  knowledge: number = 0;
  perception: number = 0;
  persuasion: number = 0;
  thievery: number = 0;
  stealth: number = 0;
}

export class Saves {
  str: number = 0;
  con: number = 0;
  agi: number = 0;
  int: number = 0;
  spi: number = 0;
  cha: number = 0;
}

export class SpellSlot {
  rank: number;
  spell: string;
}
