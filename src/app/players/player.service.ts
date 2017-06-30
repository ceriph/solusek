import {Injectable} from "@angular/core";
import {Player} from "./player";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Injectable()
export class PlayerService {

  path = 'players';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Player[]> {
    return this.db.list(this.path);
  }

  get(uid: string): FirebaseObjectObservable<Player> {
    return this.db.object(this.path + '/' + uid);
  }
}
