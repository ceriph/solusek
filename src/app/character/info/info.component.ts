import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Info} from "./info";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import {FirebaseObjectObservable} from "angularfire2/database";
import {PlayerService} from "../../players/player.service";
import {Router} from "@angular/router";
import * as firebase from "firebase/app";
import {Character} from "../character";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  character: FirebaseObjectObservable<Character>;
  user: Observable<firebase.User>;

  info: Info;

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.character = this.characterService.get(user.uid);
        this.character.subscribe(character => {
          if(character.info) {
            this.info = character.info;
          } else {
            this.info = new Info;
          }
        })
      }
    });
  }

  save(): void {
    this.character.update({
      info: this.info
    }).then(() => this.router.navigate(['/character/summary']));
  }
}
