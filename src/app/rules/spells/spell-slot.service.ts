import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Slots, SpellGroup} from "./spell";
import {Class, Type} from "../classes/class";

@Injectable()
export class SpellSlotService {

  path = "rules/spellslots";

  constructor(private db: AngularFireDatabase) {}

  get(clazz: Class, level: number): FirebaseObjectObservable<Slots> {
    return this.db.object(this.path + "/" + clazz.type.toLowerCase() + "/" + level);
  }

  list(type: Type): FirebaseListObservable<Slots[]> {
    return this.db.list(this.path + "/" + Type[type].toLowerCase());
  }
}
