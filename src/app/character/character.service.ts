import {Injectable} from "@angular/core";
import {Character} from "./character";
import {Class, ClassSkill} from "../rules/class/class";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class CharacterService {

  constructor(private db: AngularFireDatabase) {
  }

  get(playerId: string): FirebaseObjectObservable<Character> {
    return this.db.object('players/' + playerId + "/character");
  }

  getSkills(level: number, clazz: Class): ClassSkill[] {
    return clazz.skills.filter(skill => { // todo add archetype skills
      return skill.level <= level;
    });
  }
}
