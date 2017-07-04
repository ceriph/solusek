import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Rule} from "./rule";
import {RulesService} from "./rules.service";

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: FirebaseListObservable<Rule[]>;
  combat: Rule;

  constructor(private rulesService: RulesService) {
  }

  ngOnInit() {
    this.rules = this.rulesService.list();
    this.rulesService.get("combat").subscribe(combat => this.combat = combat);
  }
}
