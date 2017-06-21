import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Info} from "./info";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import {FirebaseObjectObservable} from "angularfire2/database";
import {PlayerService} from "../../players/player.service";
import {Router} from "@angular/router";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  player: FirebaseObjectObservable<Player>;
  user: Observable<firebase.User>;

  info: Info;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.player = this.playerService.getPlayer(user.uid);
        this.player.subscribe(player => {
          if(player.character && player.character.info) {
            this.info = player.character.info;
          } else {
            this.info = new Info;
          }
        })
      }
    });
  }

  save(): void {
    this.player.subscribe(player => {
      player.character.info = this.info;
      this.player.update({character: player.character});
      this.router.navigate(['/character/summary']);
    });
  }
}
