import {Component, OnInit} from "@angular/core";
import {PlayerService} from "../../players/player.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {Player} from "../../players/player";
import * as firebase from "firebase/app";
import {StatService} from "../stats/stat.service";
import {SecondaryStats, Stats} from "../stats";
import {RaceService} from "../races/race.service";
import {ClassService} from "../classes/classes.service";
import {Class} from "../classes/class";
import {Race} from "../races/race";
import {Skill} from "../skill";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  player: Player;
  user: Observable<firebase.User>;

  stats: Stats;
  secondaryStats: SecondaryStats;

  race: Race;
  clazz: Class;
  skills: Skill[];

  constructor(private afAuth: AngularFireAuth,
              private playerService: PlayerService,
              private raceService: RaceService,
              private statService: StatService,
              private classService: ClassService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.playerService.getPlayer(user.uid).subscribe(player => {
          this.player = player;
          this.raceService.get(player.character.race).subscribe(race => {
            this.race = race;
            this.stats = this.statService.calculatePrimaryStats(player.character, race);
            this.classService.get(player.character.class).subscribe(clazz => {
              this.secondaryStats = this.statService.calculateSecondaryStats(player.character, race, clazz);
              this.skills = CharacterService.getSkills(player.character, clazz);
              this.clazz = clazz;
            });
          });
        });
      }
    });
  }
}
