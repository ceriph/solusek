import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {SpellGroup} from "./spell";

@Injectable()
export class SpellGroupService {

  path = "rules/spellgroups";

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<SpellGroup[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<SpellGroup> {
    return this.db.object(this.path + "/" + name);
  }
}
