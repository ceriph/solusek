import {Component, OnInit} from "@angular/core";
import {PlayerService} from "../../players/player.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import * as firebase from "firebase/app";
import {StatService} from "../stats/stat.service";
import {RaceService} from "../../rules/race/race.service";
import {ClassService} from "../../rules/class/classes.service";
import {Class, Type} from "../../rules/class/class";
import {Race} from "../../rules/race/race";
import {CharacterService} from "../character.service";
import {Character} from "../character";
import {EquipmentService} from "../../rules/equipment/equipment.service";
import {Item} from "../../rules/equipment/equipment";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {

  user: Observable<firebase.User>;

  players: FirebaseListObservable<Player[]>;

  character: Character;
  race: Race;
  clazz: Class;

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private characterService: CharacterService,
              private raceService: RaceService,
              private statService: StatService,
              private classService: ClassService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.characterService.get(user.uid)
          .subscribe(character => this.load(character));
      }
    });

    this.players = this.playerService.list();
  }

  load(character) {
    this.character = character;

    this.raceService.get(character.race).subscribe(race => {
      this.race = race;
      this.classService.get(character.class).subscribe(clazz => {
        this.statService.calculate(character, race, clazz);
        this.character.skills = this.characterService.getSkills(character.level, clazz);
        this.clazz = clazz;
      });
    });
  }

  getSpellSlots(rank: number): number[] {
    return this.getSpells()[rank - 1];
  }

  hasSpells(): boolean {
    const spells = this.getSpells().reduce((a, b) => a + b.length, 0);
    console.log("has spells: ", spells);
    return spells > 0;
  }

  getSpells(): number[][] {
    if (this.clazz) {
      if (this.clazz.type === Type[Type.Caster]) {
        return [
          Array(Math.max(0, Math.min(this.character.level + 1, 5))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 3, 4))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 7, 4))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 11, 3))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 15, 3))).fill(1)
        ]
      } else if (this.clazz.type === Type[Type.Hybrid]) {
        return [
          Array(Math.max(0, Math.min(this.character.level - 1, 5))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 5, 4))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 9, 3))).fill(1),
          Array(Math.max(0, Math.min(this.character.level - 13, 2))).fill(1),
          []
        ]
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
}
