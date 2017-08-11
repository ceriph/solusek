import {Component, Inject, Input, OnInit} from '@angular/core';
import {SpellSlot} from "../../character";

@Component({
  selector: 'app-summary-spells',
  templateUrl: './summary-spells.component.html',
  styleUrls: ['./summary-spells.component.css']
})
export class SummarySpellsComponent implements OnInit {

  @Input()
  slots: SpellSlot[];

  constructor() {}

  ngOnInit() {
  }
}
