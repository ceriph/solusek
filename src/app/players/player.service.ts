import {Injectable} from "@angular/core";
import {Player} from "./player";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Injectable()
export class PlayerService {

  constructor(private db: AngularFireDatabase) {}

  getPlayers(): FirebaseListObservable<any[]> {
    return this.db.list('players');
  }

  getPlayer(name: string): FirebaseObjectObservable<Player> {
    return this.db.object('players/' + name);
  }
}
