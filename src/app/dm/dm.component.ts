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
  players: Player[] = [];

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private characterService: CharacterService,
              private raceService: RaceService,
              private classService: ClassService,
              private statService: StatService,
              private equipmentService: EquipmentService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.playerService.list().subscribe(players => {
      this.players = players;
      for (let player of players) {
        if (player.character && player.character.baseStats) {
          this.raceService.get(player.character.race).subscribe(race => {
            this.classService.get(player.character.class).subscribe(clazz => {
              this.statService.calculate(player.character, race, clazz);
              player.character.skills = this.characterService.getSkills(player.character.level, clazz);
              for(let itemName of player.character.equipment) {
                this.equipmentService.get(itemName).subscribe(item => {
                  if(!player.character.items) {
                    player.character.items = [];
                  }
                  player.character.items.push(item);
                });
              }
            });
          });
        }
      }
    });
    this.user.subscribe(user => {
      if (!user || user.uid !== 'Aq3nWHK9uJaVR8neIJdpGBpTMrg2') {
        this.router.navigate(['/']);
      }
    });
  }
}
