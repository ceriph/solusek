import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Item} from "../equipment";
import {EquipmentService} from "../equipment.service";

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnChanges {

  @Input()
  itemName: string;

  item: Item;

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.equipmentService.get(changes.itemName.currentValue).subscribe(item => this.item = item);
  }
}
