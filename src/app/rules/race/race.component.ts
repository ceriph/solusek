import {Component, Input, OnInit} from '@angular/core';
import {Race} from "./race";
import {RaceService} from "./race.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input()
  race: Race;

  constructor(private raceService: RaceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if(!this.race) {
      this.route.params
        .switchMap(params => this.raceService.get(params['name']))
        .subscribe(race => this.race = race);
    }
  }
}
