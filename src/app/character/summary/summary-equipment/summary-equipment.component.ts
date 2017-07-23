import {Component, Input, OnInit} from "@angular/core";
import {Equipment} from "../../character";

@Component({
  selector: 'summary-equipment',
  templateUrl: './summary-equipment.component.html',
  styleUrls: ['./summary-equipment.component.css']
})
export class SummaryEquipmentComponent implements OnInit {

  @Input()
  equipment: Equipment;

  constructor() {
  }

  ngOnInit() {
  }
}
