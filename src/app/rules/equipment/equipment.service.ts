import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Item, ItemType} from "./equipment";

@Injectable()
export class EquipmentService {

  path = 'rules/equipment';

  constructor(private db: AngularFireDatabase) {}

  list(): FirebaseListObservable<Item[]> {
    return this.db.list(this.path);
  }

  listByType(type: ItemType): FirebaseListObservable<Item[]> {
    const typeString = ItemType[type].toLowerCase(); // crazy typescript enums!
    console.log("Searching for equipment with type:", typeString);
    return this.db.list(this.path, {
        query: {
          orderByChild: 'type',
          equalTo: typeString
        }});
  }

  get(name: string): FirebaseObjectObservable<Item> {
    console.log("Getting equipment:", name);
    return this.db.object(this.path + '/' + name);
  }
}
