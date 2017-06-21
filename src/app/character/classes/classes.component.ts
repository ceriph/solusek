import {Component, OnInit} from '@angular/core';
import {Player} from "../../players/player";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Class} from "./class";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import {PlayerService} from "../../players/player.service";
import {ClassService} from "./classes.service";
import {Router} from "@angular/router";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  player: FirebaseObjectObservable<Player>;
  user: Observable<firebase.User>;

  classes: FirebaseListObservable<Class[]>;
  selectedClass: Class;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private classService: ClassService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.classes = this.classService.list();

    this.user.subscribe(user => {
      if (user && user.uid) {
        this.player = this.playerService.getPlayer(user.uid);
        this.player.subscribe(player => {
          if (player.character && player.character.class) {
            this.classService.get(player.character.class).subscribe(clazz => {
              this.selectedClass = clazz;
            });
          }
        })
      }
    });
  }

  select(clazz: Class): void {
    this.selectedClass = clazz;
  }

  save(): void {
    this.player.subscribe(player => {
      player.character.class = this.selectedClass.name;
      if(player.character.stats) {
        player.character.stats = null;
      }
      this.player.update({character: player.character});
      if (!player.character.stats) {
        this.router.navigate(['/character/stats']);
      } else {
        alert("Character Updated!"); // todo urgggghhh
      }
    });
  }
}
