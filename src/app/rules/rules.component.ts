import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Rule} from "./rule";
import {RulesService} from "./rules.service";
import {Race} from "../character/races/race";
import {Class} from "../character/classes/class";
import {Spell, SpellGroup} from "./spells/spell";
import {SpellService} from "./spells/spell.service";

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: FirebaseListObservable<Rule[]>;
  races: FirebaseListObservable<Race[]>;
  classes: FirebaseListObservable<Class[]>;
  spells: SpellGroup[];
  combat: Rule;

  constructor(private rulesService: RulesService,
              private spellService: SpellService) {
  }

  ngOnInit() {
    this.rules = this.rulesService.list();
    this.rulesService.get("combat").subscribe(combat => this.combat = combat);
    this.spellService.list().subscribe(spellgroups => {
      console.log("Got spells: ", spellgroups);
      this.spells = spellgroups;
    });
  }
}
