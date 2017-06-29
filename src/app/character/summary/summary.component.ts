import {Component, OnInit} from "@angular/core";
import {PlayerService} from "../../players/player.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import * as firebase from "firebase/app";
import {StatService} from "../stats/stat.service";
import {SecondaryStats, PrimaryStats} from "../stats";
import {RaceService} from "../races/race.service";
import {ClassService} from "../classes/classes.service";
import {Class} from "../classes/class";
import {Race} from "../races/race";
import {Skill} from "../skill";
import {CharacterService} from "../character.service";
import {Character} from "../character";
import {EquipmentService} from "../equipment.service";
import {Equipment} from "../equipment";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: Observable<firebase.User>;

  character: Character;
  race: Race;
  clazz: Class;
  skills: Skill[] = [];
  equipment: Equipment[] = [];

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private raceService: RaceService,
              private statService: StatService,
              private classService: ClassService,
              private equipmentService: EquipmentService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.characterService.get(user.uid).subscribe(character => {
          this.character = character;
          for(let itemName of character.equipment) {
            this.equipmentService.get(itemName).subscribe(item => {
              this.equipment.push(item);
            })
          }
          this.raceService.get(character.race).subscribe(race => {
            this.race = race;
            this.classService.get(character.class).subscribe(clazz => {
              this.statService.calculate(character, race, clazz);
              this.skills = this.characterService.getSkills(character.level, clazz);
              this.clazz = clazz;
            });
          });
        });
      }
    });
  }
}
