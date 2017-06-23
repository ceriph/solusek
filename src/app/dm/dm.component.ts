import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";
import {Player} from "../players/player";
import {PlayerService} from "../players/player.service";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {RaceService} from "../character/races/race.service";
import {StatService} from "../character/stats/stat.service";
import {ClassService} from "../character/classes/classes.service";

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html'
})
export class DmComponent implements OnInit {

  user: Observable<firebase.User>;
  players: Player[] = [];

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private raceService: RaceService,
              private classService: ClassService,
              private statService: StatService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      for(let player of players) {
        if(player.character && player.character.stats) {
          this.raceService.get(player.character.race).subscribe(race => {
            player.character.primary = this.statService.calculatePrimaryStats(player.character, race);
            this.classService.get(player.character.class).subscribe(clazz => {
              player.character.secondary = this.statService.calculateSecondaryStats(player.character, race, clazz);
            });
          });
        }
      }
    });
    this.user.subscribe(user => {
      if (!user || user.uid !== 'Aq3nWHK9uJaVR8neIJdpGBpTMrg2') {
        this.router.navigate(['/']);
      }
    });
  }
}
