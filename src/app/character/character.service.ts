import {Injectable} from "@angular/core";
import {Character} from "./character";
import {Skill} from "./skill";
import {Class} from "./classes/class";

@Injectable()
export class CharacterService {

  constructor() {}

  static getSkills(character: Character, clazz: Class): Skill[] {
    if(!clazz.skills)
      return [];

    return clazz.skills.filter(skill => {
      return skill.level <= character.level;
    })
  }
}
