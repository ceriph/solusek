import {Component, Input, OnInit} from "@angular/core";
import {SpellGroup} from "../spell";
import {ActivatedRoute} from "@angular/router";
import {SpellGroupService} from "../spell-group.service";

@Component({
  selector: 'spell-book',
  templateUrl: './spell-book.component.html',
  styleUrls: ['./spell-book.component.css']
})
export class SpellBookComponent implements OnInit {

  spellGroup: SpellGroup;

  constructor(private spellGroupService: SpellGroupService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.spellGroupService.get(params['name'].toLowerCase()))
      .subscribe(spellGroup => {
        this.spellGroup = spellGroup;
      });
  }
}
