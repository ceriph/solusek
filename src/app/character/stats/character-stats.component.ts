import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";
import {RaceService} from "../../rules/races/race.service";
import {Race} from "../../rules/races/race";
import {PrimaryStats} from "./stats";
import {StatService} from "./stat.service";
import {CharacterService} from "../character.service";
import {Character} from "../character";

@Component({
  selector: 'app-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.css']
})
export class CharacterStatsComponent implements OnInit {

  character: FirebaseObjectObservable<Character>;
  user: Observable<firebase.User>;

  selectedRace: Race;

  baseStats: PrimaryStats;
  stats: PrimaryStats;
  modifiers: PrimaryStats;

  level: number;
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
          this.level = character.level;
          if (character.race) {
            this.raceService.get(character.race).subscribe(race => {
              this.selectedRace = race;
              this.modifiers = this.statService.calculateModifiers(character, race);
            });
          }
          if (character.baseStats) {
            this.baseStats = character.baseStats;
            this.stats = character.baseStats;
          } else {
            this.baseStats = new PrimaryStats();
            this.stats = new PrimaryStats();
          }

          this.setAvailablePoints();
        })
      }
    });
  }

  getMax(stat): number {
    if (!this.level) {
      return 5;
    }

    return Math.min(5 + this.level - 1, stat + this.availablePoints);
  }

  minus(stat): void {
    if(this.stats[stat] > this.baseStats[stat]) {
      this.stats[stat]--;
      this.setAvailablePoints();
    }
  }

  plus(stat): void {
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
