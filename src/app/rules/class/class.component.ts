import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Class} from "./class";
import {ActivatedRoute} from "@angular/router";
import {ClassService} from "./classes.service";
import {Item} from "../equipment/equipment";
import {EquipmentService} from "../equipment/equipment.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit, OnChanges {

  @Input()
  clazz: Class;

  equipment: Item[];

  constructor(private classService: ClassService,
              private equipmentService: EquipmentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if(!this.clazz) {
      this.route.params
        .switchMap(params => this.classService.get(params['name']))
        .subscribe(clazz => {
          this.clazz = clazz;
        });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadEquipment(changes.clazz.currentValue)
  }

  loadEquipment(clazz: Class) {
    this.equipment = [];
    for (let itemName of clazz.equipment) {
      this.equipmentService.get(itemName).subscribe(item => {
        this.equipment.push(item);
      });
    }
  }
}
