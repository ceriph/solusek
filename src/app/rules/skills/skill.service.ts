import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Skill} from "./skill";

@Injectable()
export class SkillService {

  path = "rules/skills";

  constructor(private db: AngularFireDatabase) {}

  get(name: string): FirebaseObjectObservable<Skill> {
    return this.db.object(this.path + '/' + name);
  }
}
