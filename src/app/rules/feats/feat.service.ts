import {Injectable} from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";
import {Feat} from "./feat";

@Injectable()
export class FeatService {

  path = 'rules/feats';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Feat[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<Feat> {
    return this.db.object(this.path + '/' + name);
  }
}
