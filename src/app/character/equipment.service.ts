import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import {Armour, ArmourBase, Equipment, WeaponBase} from "./equipment";

@Injectable()
export class EquipmentService {

  path = 'equipment';

  constructor(private db: AngularFireDatabase) {}

  getBaseArmour(name: string): FirebaseObjectObservable<ArmourBase> {
    console.log("Getting armour:", name);
    return this.db.object(this.path + '/basearmour/' + name);
  }

  getBaseWeapon(name: string): FirebaseObjectObservable<WeaponBase> {
    console.log("Getting weapon:", name);
    return this.db.object(this.path + '/baseweapons/' + name);
  }

  get(name: string): FirebaseObjectObservable<Equipment> {
    console.log("Getting equipment:", name);
    return this.db.object(this.path + '/' + name);
  }
}
