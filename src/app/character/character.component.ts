import {Component, OnInit} from '@angular/core';
import {Player} from "../players/player";
import {PlayerService} from "../players/player.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Observable} from "rxjs";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  player: Player;
  user: Observable<firebase.User>;

  status = "INCOMPLETE";

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.playerService.get(user.uid).subscribe(player => {
          this.player = player;
          if (!this.player.character || !this.player.character.race) {
            this.router.navigate(['/character/races']);
          } else if (!this.player.character.class) {
            this.router.navigate(['/character/classes']);
          } else if (!this.player.character.baseStats) {
            this.router.navigate(['/character/stats']);
          } else if (!this.player.character.info) {
            this.router.navigate(['/character/info']);
          } else {
            this.status = "COMPLETE";
            this.router.navigate(['/character/summary']);
          }
        });
      }
    });
  }
}
