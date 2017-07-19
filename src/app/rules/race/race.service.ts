import {Injectable} from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";
import {Race} from "./race";

@Injectable()
export class RaceService {

  path = 'races';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Race[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<Race> {
    return this.db.object(this.path + '/' + name);
  }
}
