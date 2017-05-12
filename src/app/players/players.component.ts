import {OnInit, Component} from "@angular/core";
import {Player} from "./player";
import {PlayerService} from "./player.service";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

@Component({
  selector: 'players',
  template: `
    <h1>Players</h1>
    <li *ngFor="let player of players | async" (click)="goToDetail(player)">
      <span>{{player.name}}</span>
    </li>
  `
})
export class PlayersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor (
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetail(player: Player): void {
    this.router.navigate(['/players', player.name]);
  }
}
