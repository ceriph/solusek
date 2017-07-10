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
import {CharacterService} from "../character/character.service";
import {EquipmentService} from "../character/equipment.service";

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (!user || user.uid !== 'Aq3nWHK9uJaVR8neIJdpGBpTMrg2') {
        this.router.navigate(['/']);
      }
    });
  }
}
