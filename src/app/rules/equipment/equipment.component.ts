import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "./equipment.service";
import {FirebaseListObservable} from "angularfire2/database";
import {Item, ItemType} from "./equipment";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: FirebaseListObservable<Item[]>;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.filterItems("all");
  }

  filterItems(selection: string) {
    if(selection == "all") {
      this.equipment = this.equipmentService.list();
    } else {
      this.equipment = this.equipmentService.listByType(ItemType[selection]);
    }
  }
}
