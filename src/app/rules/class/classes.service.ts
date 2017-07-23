import {Injectable} from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";
import {Class} from "./class";

@Injectable()
export class ClassService {

  path = 'rules/classes';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<any[]> {
    return this.db.list(this.path);
  }

  get(name: string): FirebaseObjectObservable<Class> {
    console.log("Getting class:", name);
    return this.db.object(this.path + '/' + name);
  }
}
