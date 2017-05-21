import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email, password): firebase.Promise < any > {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): firebase.Promise < any > {
    return this.afAuth.auth.signOut();
  }
}
