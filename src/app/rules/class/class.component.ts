import {Component, OnInit} from "@angular/core";
import {Class} from "../../character/classes/class";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../character/classes/classes.service";
import {Equipment} from "../../character/equipment";
import {EquipmentService} from "../../character/equipment.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  clazz: Class;
  equipment: Equipment[];

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
