import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Scenario} from "./scenario";

@Injectable()
export class ScenarioService {

  path = 'scenarios';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Scenario[]> {
    return this.db.list(this.path);
  }
}
