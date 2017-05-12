import {RaceService} from "./race.service";
import {Race} from "./race";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  title = 'Races';

  races: FirebaseListObservable<any[]>;
  selectedRace: Race;

  constructor (
    private raceService: RaceService
  ) {}

  ngOnInit() {
    this.races = this.raceService.getRaces();
  }

  select(race: Race): void {
    this.selectedRace = race;
  }
}
