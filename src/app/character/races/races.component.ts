import {RaceService} from "./race.service";
import {Race} from "./race";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {OnInit, Component} from "@angular/core";
import {Player} from "../../players/player";
import {PlayerService} from "../../players/player.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FirebaseObjectObservable} from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  player: FirebaseObjectObservable<Player>;
  user: Observable<firebase.User>;

  races: FirebaseListObservable<Race[]>;
  selectedRace: Race;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private raceService: RaceService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.races = this.raceService.list();
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.player = this.playerService.getPlayer(user.uid);
        this.player.subscribe(player => {
          if (player.character && player.character.race) {
            this.raceService.get(player.character.race).subscribe(race => {
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
    this.player.subscribe(player => {
      player.character.race = this.selectedRace.name;
      if (player.character.class) {
        player.character.class = null;
        player.character.stats = null;
      }
      this.player.set(player);
      this.router.navigate(['/character/classes']);
    });
  }
}
