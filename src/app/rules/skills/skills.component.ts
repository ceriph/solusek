import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "./skill";
import {ClassSkill} from "../class/class";
import {SkillService} from "./skill.service";

@Component({
  selector: 'skill-card',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input()
  classSkill: ClassSkill;

  skill: Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.get(this.classSkill.name).subscribe(skill => this.skill = skill);
  }
}
