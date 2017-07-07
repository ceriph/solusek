import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Equipment, EquipmentType} from "./equipment";

@Injectable()
export class EquipmentService {

  path = 'equipment';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Equipment[]> {
    return this.db.list(this.path);
  }

  listByType(type: EquipmentType): FirebaseListObservable<Equipment[]> {
    let typeString = EquipmentType[type].toLowerCase(); // crazy typescript enums!
    console.log("Searching for equipment with type:", typeString);
    return this.db.list(this.path, {
        query: {
          orderByChild: 'type',
          equalTo: typeString
        }});
  }

  get(name: string): FirebaseObjectObservable<Equipment> {
    console.log("Getting equipment:", name);
    return this.db.object(this.path + '/' + name);
  }
}
