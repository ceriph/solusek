import {Injectable} from "@angular/core";
import {Character} from "./character";
import {Class, ClassSkill} from "../rules/classes/class";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class CharacterService {

  constructor(private db: AngularFireDatabase) {
  }

  get(playerId: string): FirebaseObjectObservable<Character> {
    return this.db.object('players/' + playerId + "/character");
  }

  getSkills(character: Character, clazz: Class): ClassSkill[] {
    const skills = clazz.skills.filter(skill => {
      return skill.level <= character.level;
    });

    if (character.archetype) {
      return skills.concat(clazz.archetypes[character.archetype].skills.filter(skill => {
        return skill.level <= character.level;
      }));
    } else {
      return skills;
    }
  }
}
