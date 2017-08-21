import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Rule} from "./rule";
import {RulesService} from "./rules.service";
import {Race} from "./race/race";
import {Class, Type} from "./class/class";
import {Slots, Spell, SpellGroup} from "./spells/spell";
import {SpellService} from "./spells/spell.service";
import {ClassService} from "./class/classes.service";
import {RaceService} from "./race/race.service";
import {Item, ItemType} from "./equipment/equipment";
import {EquipmentService} from "./equipment/equipment.service";
import {Router} from "@angular/router";
import {PoisonRank} from "./poisons/poison";
import {PoisonService} from "./poisons/poison.service";
import {SpellGroupService} from "./spells/spell-group.service";
import {SpellSlotService} from "./spells/spell-slot.service";

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: FirebaseListObservable<Rule[]>;
  races: FirebaseListObservable<Race[]>;
  classes: FirebaseListObservable<Class[]>;
  spells: FirebaseListObservable<SpellGroup[]>;
  poisons: FirebaseListObservable<PoisonRank[]>;
  armour: FirebaseListObservable<Item[]>;
  shields: FirebaseListObservable<Item[]>;
  weapons: FirebaseListObservable<Item[]>;
  tools: FirebaseListObservable<Item[]>;
  levels: number[];
  casterSpellSlots: FirebaseListObservable<Slots[]>;
  hybridSpellSlots: FirebaseListObservable<Slots[]>;

  constructor(private rulesService: RulesService,
              private classService: ClassService,
              private raceService: RaceService,
              private spellGroupService: SpellGroupService,
              private poisonService: PoisonService,
              private equipmentService: EquipmentService,
              private spellSlotService: SpellSlotService) {
  }

  ngOnInit() {
    this.levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.rules = this.rulesService.list();
    this.spells = this.spellGroupService.list();
    this.poisons = this.poisonService.list();
    this.races = this.raceService.list();
    this.classes = this.classService.list();
    this.armour = this.equipmentService.listByType(ItemType.Armour);
    this.weapons = this.equipmentService.listByType(ItemType.Weapon);
    this.shields = this.equipmentService.listByType(ItemType.Shield);
    this.tools = this.equipmentService.listByType(ItemType.Tool);
    this.casterSpellSlots = this.spellSlotService.list(Type.Caster);
    this.hybridSpellSlots = this.spellSlotService.list(Type.Hybrid);
  }
}
