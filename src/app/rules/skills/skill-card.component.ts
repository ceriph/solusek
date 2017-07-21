import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "./skill";
import {ClassSkill} from "../class/class";
import {SkillService} from "./skill.service";

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input()
  classSkill: ClassSkill;

  skill: Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.get(this.classSkill.name).subscribe(skill => this.skill = skill);
  }
}
