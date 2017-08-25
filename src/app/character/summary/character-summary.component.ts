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
import {SpellSlotService} from "../../rules/spells/spell-slot.service";

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
  spellSlots: number[][];

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private characterService: CharacterService,
              private raceService: RaceService,
              private statService: StatService,
              private classService: ClassService,
              private spellSlotService: SpellSlotService) {
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
        this.character.skills = this.characterService.getSkills(character, clazz);
        this.clazz = clazz;
        this.spellSlotService.get(this.clazz, this.character.level).subscribe(slots => {
          if(slots) {
            this.spellSlots = [
              Array(slots[0]).fill(1),
              Array(slots[1]).fill(2),
              Array(slots[2]).fill(3),
              Array(slots[3]).fill(4),
              Array(slots[4]).fill(5),
              Array(slots[5]).fill(6),
              Array(slots[6]).fill(7),
              Array(slots[7]).fill(8),
              Array(slots[8]).fill(9)
            ]
          } else {
            this.spellSlots = [];
          }
        });
      });
    });
  }

  hasSpells(): boolean {
    return this.clazz.type === Type[Type.Caster] || this.clazz.type === Type[Type.Hybrid];
  }

  getHitDie(): number[] {
    return Array(this.character.level).fill(this.clazz.hit);
  }
}
