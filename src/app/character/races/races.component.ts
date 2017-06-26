import {RaceService} from "./race.service";
import {Race} from "./race";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";
import {CharacterService} from "../character.service";
import {Character} from "../character";

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  character: FirebaseObjectObservable<Character>;
  user: Observable<firebase.User>;

  races: FirebaseListObservable<Race[]>;
  selectedRace: Race;

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private raceService: RaceService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.races = this.raceService.list();
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.character = this.characterService.get(user.uid);
        this.character.subscribe(character => {
          if (character.race) {
            this.raceService.get(character.race).subscribe(race => {
              this.selectedRace = race;
            });
          }
        })
      }
    });
  }

  select(race: Race): void {
    this.selectedRace = race;
    window.scrollTo(0, 0);
  }

  save(): void {
    this.character.update({
      race: this.selectedRace.name,
      "class": null,
      stats: null
    }).then(() => this.router.navigate(['/character/classes']));
  }
}
