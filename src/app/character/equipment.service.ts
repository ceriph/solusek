import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Armour} from "./equipment";

@Injectable()
export class EquipmentService {

  path = 'equipment';

  constructor(private db: AngularFireDatabase) {}

  getArmour(name: string): FirebaseObjectObservable<Armour> {
    console.log("Getting armour:", name);
    return this.db.object(this.path + '/armour/' + name);
  }
}
