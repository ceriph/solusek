import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Observable} from "rxjs";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";
import {Character} from "./character";
import {CharacterService} from "./character.service";

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character;
  user: Observable<firebase.User>;

  status = "INCOMPLETE";

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.characterService.get(user.uid).subscribe(character => {
          this.character = character;
          if (!this.character || !this.character.race) {
            this.router.navigate(['/character/race']);
          } else if (!this.character.class) {
            this.router.navigate(['/character/classes']);
          } else if (!this.character.baseStats) {
            this.router.navigate(['/character/stats']);
          } else if (!this.character.info) {
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
