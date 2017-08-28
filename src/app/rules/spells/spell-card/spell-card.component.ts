import {Component, Input, OnInit} from "@angular/core";
import {Spell} from "../spell";
import {SpellService} from "../spell.service";

@Component({
  selector: 'spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.css']
})
export class SpellCardComponent implements OnInit {

  @Input()
  spellName: string;

  spell: Spell;

  @Input()
  showDetail = false;

  constructor(private spellService: SpellService) {
  }

  ngOnInit() {
    this.spellService.get(this.spellName).subscribe(sp => this.spell = sp);
  }

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }
}
