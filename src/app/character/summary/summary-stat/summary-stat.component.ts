import {Component, Input, OnInit} from '@angular/core';
import {PrimaryStats} from "../../stats/stats";

@Component({
  selector: 'summary-stat',
  templateUrl: './summary-stat.component.html',
  styleUrls: ['./summary-stat.component.css']
})
export class SummaryStatComponent implements OnInit {

  @Input()
  stats: PrimaryStats;

  @Input()
  stat: string;

  @Input()
  display: string;

  @Input()
  isModifier: boolean = false;

  constructor() { }

  ngOnInit() {
    if(!this.display) {
      this.display = this.stat.toUpperCase();
    }
  }

  getValue() {
    let value = this.stats[this.stat];

    if(this.isModifier) {
      value = "+" + this.stats[this.stat];
    }

    return value;
  }
}
