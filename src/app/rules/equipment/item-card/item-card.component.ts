import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../equipment";
import {EquipmentService} from "../equipment.service";

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  itemName: string;

  item: Item;

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.equipmentService.get(this.itemName).subscribe(item => this.item = item);
  }
}
