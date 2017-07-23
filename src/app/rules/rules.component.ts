import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Rule} from "./rule";
import {RulesService} from "./rules.service";
import {Race} from "./race/race";
import {Class} from "./class/class";
import {Spell, SpellGroup} from "./spells/spell";
import {SpellService} from "./spells/spell.service";
import {ClassService} from "./class/classes.service";
import {RaceService} from "./race/race.service";
import {Item, ItemType} from "./equipment/equipment";
import {EquipmentService} from "./equipment/equipment.service";
import {Router} from "@angular/router";
import {PoisonRank} from "./poisons/poison";
import {PoisonService} from "./poisons/poison.service";

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

  constructor(private rulesService: RulesService,
              private classService: ClassService,
              private raceService: RaceService,
              private spellService: SpellService,
              private poisonService: PoisonService,
              private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.rules = this.rulesService.list();
    this.spells = this.spellService.list();
    this.poisons = this.poisonService.list();
    this.races = this.raceService.list();
    this.classes = this.classService.list();
    this.armour = this.equipmentService.listByType(ItemType.Armour);
    this.weapons = this.equipmentService.listByType(ItemType.Weapon);
    this.shields = this.equipmentService.listByType(ItemType.Shield);
    this.tools = this.equipmentService.listByType(ItemType.Tool);
  }
}
