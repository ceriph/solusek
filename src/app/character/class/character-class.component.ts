import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Class} from "../../rules/class/class";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import {ClassService} from "../../rules/class/classes.service";
import {Router} from "@angular/router";
import * as firebase from "firebase/app";
import {CharacterService} from "../character.service";
import {Character} from "../character";
import {EquipmentService} from "../../rules/equipment/equipment.service";
import {Equipment} from "../../rules/equipment/equipment";

@Component({
  selector: 'app-classes',
  templateUrl: './character-class.component.html',
  styleUrls: ['./character-class.component.css']
})
export class CharacterClassComponent implements OnInit {
  character: FirebaseObjectObservable<Character>;
  user: Observable<firebase.User>;

  classes: FirebaseListObservable<Class[]>;
  selectedClass: Class;
  equipment: Equipment[];

  constructor(private afAuth: AngularFireAuth,
              private characterService: CharacterService,
              private classService: ClassService,
              private equipmentService: EquipmentService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.classes = this.classService.list();

    this.user.subscribe(user => {
      if (user && user.uid) {
        this.character = this.characterService.get(user.uid);
        this.character.subscribe(character => {
          if (character.class) {
            this.classService.get(character.class).subscribe(clazz => {
              this.selectedClass = clazz;
              this.updateEquipment(clazz);
            });
          }
        })
      }
    });
  }

  select(clazz: Class): void {
    this.selectedClass = clazz;
    this.updateEquipment(clazz);
    window.scrollTo(0, 0);
  }

  updateEquipment(clazz: Class) {
    this.equipment = [];
    for(let itemName of clazz.equipment) {
      this.equipmentService.get(itemName).subscribe(item => {
        this.equipment.push(item);
      });
    }
  }

  save(): void {
    this.character.update({
      "class": this.selectedClass.name,
      equipment: this.selectedClass.equipment,
      stats: null
    }).then(() => this.router.navigate(['/character/stats']));
  }
}
