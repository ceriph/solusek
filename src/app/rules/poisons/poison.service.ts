import {Injectable, OnInit} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Poison, PoisonRank} from "./poison";

@Injectable()
export class PoisonService {

  path = "poisons";

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<PoisonRank[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<Poison> {
    return this.db.object(this.path + "/" + name);
  }
}
