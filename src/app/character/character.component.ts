import {Component, OnInit} from '@angular/core';
import {Player} from "../players/player";
import {PlayerService} from "../players/player.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Observable} from "rxjs";
import * as firebase from "firebase/app";
import {Character} from "./character";

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  player: Player;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if(user && user.uid) {
        this.playerService.getPlayer(user.uid).subscribe(player => this.player = player)
      }
    });
  }

  createCharacter() {
    this.player.character = new Character;

  }
}
