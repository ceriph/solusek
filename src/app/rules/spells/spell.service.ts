import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Spell, SpellGroup} from "./spell";

@Injectable()
export class SpellService {

  path = "rules/spells";

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<SpellGroup[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<Spell> {
    return this.db.object(this.path + "/" + name);
  }
}
