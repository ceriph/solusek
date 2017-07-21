import {Component, Input, OnInit} from '@angular/core';
import {Checks} from "../../character";

@Component({
  selector: 'summary-check',
  templateUrl: './summary-check.component.html',
  styleUrls: ['./summary-check.component.css']
})
export class SummaryCheckComponent implements OnInit {

  @Input()
  checks: Checks;

  @Input()
  check: string;

  @Input()
  display: string;

  constructor() {
  }

  ngOnInit() {
    if (!this.display) {
      this.display = this.check.toUpperCase();
    }
  }

  getValue() {
    return "+" + this.checks[this.check];
  }

}
