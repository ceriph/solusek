import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";
import {RaceService} from "../races/race.service";
import {Race} from "../races/race";
import {Stats} from "../stats";
import {StatService} from "./stat.service";
import {CharacterService} from "../character.service";
import {Character} from "../character";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  character: FirebaseObjectObservable<Character>;
  user: Observable<firebase.User>;

  selectedRace: Race;

  stats: Stats;
  modifiers: Stats;

  availablePoints: number;

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private raceService: RaceService,
              private statService: StatService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.character = this.characterService.get(user.uid);
        this.character.subscribe(character => {
          if (character.race) {
            this.raceService.get(character.race).subscribe(race => {
              this.selectedRace = race;
              this.modifiers = this.statService.calculateModifiers(character, race);
            });
          }
          if (character.stats) {
            this.stats = character.stats;
          } else {
            this.stats = new Stats();
          }

          this.setAvailablePoints();
        })
      }
    });
  }

  getMax(stat): number {
    return Math.min(5, stat + this.availablePoints);
  }

  setAvailablePoints(): void {
    this.character.subscribe(character => {
      if (character.race) {
        this.availablePoints = this.statService.calculateAvailable(character, this.stats);
      } else {
        this.availablePoints = 0;
      }
    });
  }

  save(): void {
    this.character.update({
      stats: this.stats
    }).then(() => this.router.navigate(['/character/info']));
  }
}
