import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../players/player.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";
import {RaceService} from "../races/race.service";
import {Race} from "../races/race";
import {Stats} from "../stats";
import {StatService} from "./stat.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  player: FirebaseObjectObservable<Player>;
  user: Observable<firebase.User>;

  selectedRace: Race;

  stats: Stats;
  modifiers: Stats;

  availablePoints: number;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private raceService: RaceService,
              private statService: StatService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.player = this.playerService.getPlayer(user.uid);
        this.player.subscribe(player => {
          if (player.character && player.character.race) {
            this.raceService.get(player.character.race).subscribe(race => {
              this.selectedRace = race;
              this.modifiers = this.statService.calculateModifiers(player.character, race);
            });
          }
          if (player.character.stats) {
            this.stats = player.character.stats;
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
    this.player.subscribe(player => {
      if (player.character.race) {
        this.availablePoints = this.statService.calculateAvailable(player.character, this.stats);
      } else {
        this.availablePoints = 0;
      }
    });
  }

  save(): void {
    this.player.subscribe(player => {
      player.character.stats = this.stats;
      this.player.set(player).then(() => {
        this.router.navigate(['/character/info']);
      });
    });
  }
}
