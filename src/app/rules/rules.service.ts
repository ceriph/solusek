import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Rule} from "./rule";

@Injectable()
export class RulesService {

  path = "rules/rules";

  constructor(private db: AngularFireDatabase) {
  }

  list(): FirebaseListObservable<Rule[]> {
    return this.db.list(this.path);
  }

  get(name): FirebaseObjectObservable<Rule> {
    return this.db.object(this.path + "/" + name);
  }
}
