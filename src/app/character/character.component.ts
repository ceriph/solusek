import { Component, OnInit } from '@angular/core';
import {Player} from "../players/player";
import {PlayerService} from "../players/player.service";

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer("Matt").subscribe(player => this.player = player)
  }
}
