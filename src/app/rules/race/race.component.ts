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

  constructor(private classService: RaceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let clazz = params['race'] || "human";
      this.classService.get(clazz).subscribe(result => {
        this.race = result
      });
    })
  }
}
