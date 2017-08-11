import {Component, Input, OnInit} from "@angular/core";
import {Spell} from "../spell";

@Component({
  selector: 'spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.css']
})
export class SpellCardComponent implements OnInit {

  @Input()
  spell: Spell;

  constructor() { }

  ngOnInit() {}
}
