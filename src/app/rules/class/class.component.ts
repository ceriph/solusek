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
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let clazz = params['class'] || "warrior";
      this.classService.get(clazz).subscribe(result => {
        this.clazz = result
      });
    })
  }
}
