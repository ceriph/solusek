import { Component, OnInit } from '@angular/core';
import {Race} from "../../character/races/race";
import {RaceService} from "../../character/races/race.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: Race;

  constructor(private raceService: RaceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.raceService.get(params['name']))
      .subscribe(race => this.race = race);
  }
}
