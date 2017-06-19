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
  title = 'Races';

  player: FirebaseObjectObservable<Player>;
  user: Observable<firebase.User>;

  races: FirebaseListObservable<any[]>;
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
      }
    });
  }

  select(race: Race): void {
    this.selectedRace = race;
  }

  save(): void {
    this.player.subscribe(player => {
      player.character.race = this.selectedRace;
      this.player.update({character: player.character});
      if (!player.character.class) {
        this.router.navigate(['/character/class']);
      }
    });
  }
}
