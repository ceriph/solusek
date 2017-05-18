import {OnInit, Component} from "@angular/core";
import {Player} from "./player";
import {ActivatedRoute, Params} from "@angular/router";
import {PlayerService} from "./player.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'player-detail',
  template: `
    <div *ngIf="player">
      <h1>Character Details - {{player.name}}</h1>
      <div>Name: {{player.character.name}}</div>
    </div>
  `
})
export class PlayerDetailComponent implements OnInit {
  player: Player;

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.playerService.getPlayer(params['name']))
      .subscribe(player => this.player = player);
  }
}
