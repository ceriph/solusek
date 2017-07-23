import {Component, OnInit} from "@angular/core";
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
export class ClassComponent implements OnInit {

  clazz: Class;
  equipment: Item[];

  constructor(private classService: ClassService,
              private equipmentService: EquipmentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.classService.get(params['name']))
      .subscribe(clazz => {
        this.clazz = clazz;
        this.equipment = [];
        for(let itemName of clazz.equipment) {
          this.equipmentService.get(itemName).subscribe(item => {
            this.equipment.push(item);
          });
        }
      });
  }
}
