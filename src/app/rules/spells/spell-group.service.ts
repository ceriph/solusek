import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {SpellGroup} from "./spell";

@Injectable()
export class SpellGroupService {

  path = "rules/spellgroups";

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<SpellGroup[]> {
    return this.db.list(this.path);
  }
}
