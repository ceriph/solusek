import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Spell} from "./spell";

@Injectable()
export class SpellService {

  path = "rules/spells2";

  constructor(private db: AngularFireDatabase) {}

  get(name: string): FirebaseObjectObservable<Spell> {
    return this.db.object(this.path + "/" + name);
  }
}
