import {Component, OnInit} from "@angular/core";
import {Class} from "../../character/classes/class";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../character/classes/classes.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  clazz: Class;

  constructor(private classService: ClassService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.classService.get(params['name']))
      .subscribe(clazz => this.clazz = clazz);
  }
}
