import { Component, OnInit } from '@angular/core';
import {ScenarioService} from "./scenario.service";
import {FirebaseListObservable} from "angularfire2/database";
import {Scenario} from "./scenario";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  scenarios: FirebaseListObservable<Scenario[]>;

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit() {
    this.scenarios = this.scenarioService.list();
  }
}
