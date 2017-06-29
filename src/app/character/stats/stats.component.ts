import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";
import {RaceService} from "../races/race.service";
import {Race} from "../races/race";
import {PrimaryStats} from "../stats";
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

  baseStats: PrimaryStats;
  stats: PrimaryStats;
  modifiers: PrimaryStats;

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
          this.baseStats = new PrimaryStats();
          if (character.baseStats) {
            this.stats = character.baseStats;
          } else {
            this.stats = new PrimaryStats();
          }

          this.setAvailablePoints();
        })
      }
    });
  }

  getMax(stat): number {
    return Math.min(5, stat + this.availablePoints);
  }

  minus(stat): void {
    if(this.stats[stat] > this.baseStats[stat]) {
      this.stats[stat]--;
      this.setAvailablePoints();
    }
  }

  plus(stat): void {
    // todo add level-1 onto max possible
    if(this.stats[stat] < this.getMax(this.stats[stat])) {
      this.stats[stat]++;
      this.setAvailablePoints();
    }
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
      baseStats: this.stats
    }).then(() => this.router.navigate(['/character/info']));
  }
}
