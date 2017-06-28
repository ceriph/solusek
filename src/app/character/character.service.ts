import {Injectable} from "@angular/core";
import {Character} from "./character";
import {Skill} from "./skill";
import {Class} from "./classes/class";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class CharacterService {

  constructor(private db: AngularFireDatabase) {}

  get(playerId: string): FirebaseObjectObservable<Character> {
    return this.db.object('players/' + playerId + "/character");
  }

  getSkills(level: number, clazz: Class): Skill[] {
    if(!clazz.skills)
      return [];

    return clazz.skills.filter(skill => {
      return skill.level <= level;
    })
  }
}
