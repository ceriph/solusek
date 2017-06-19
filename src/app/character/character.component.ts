import {Component, OnInit} from '@angular/core';
import {Player} from "../players/player";
import {PlayerService} from "../players/player.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Observable} from "rxjs";
import * as firebase from "firebase/app";
import {Character} from "./character";
import {Router} from "@angular/router";

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  player: Player;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.playerService.getPlayer(user.uid).subscribe(player => {
          this.player = player
          if (!this.player.character.race) {
            this.router.navigate(['/character/races']);
          } else if (!this.player.character.class) {
            this.router.navigate(['/character/classes']);
          } else if (!this.player.character.stats) {
            this.router.navigate(['/character/stats']);
          } else if (!this.player.character.info) {
            this.router.navigate(['/character/info']);
          }
        })
      }
    });
  }

  createCharacter() {
    this.player.character = new Character;
    this.router.navigate(['/races']);
  }
}
