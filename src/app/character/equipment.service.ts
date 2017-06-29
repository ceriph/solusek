import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Equipment} from "./equipment";

@Injectable()
export class EquipmentService {

  path = 'equipment';

  constructor(private db: AngularFireDatabase) {}

  get(name: string): FirebaseObjectObservable<Equipment> {
    console.log("Getting equipment:", name);
    return this.db.object(this.path + '/' + name);
  }
}
