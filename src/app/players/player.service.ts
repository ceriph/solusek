import {Injectable} from "@angular/core";
import {Player} from "./player";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Injectable()
export class PlayerService {

  path = 'players';

  constructor(private db: AngularFireDatabase) {}

  getPlayers(): FirebaseListObservable<any[]> {
    return this.db.list(this.path);
  }

  getPlayer(uid: string): FirebaseObjectObservable<Player> {
    return this.db.object(this.path + '/' + uid);
  }
}
