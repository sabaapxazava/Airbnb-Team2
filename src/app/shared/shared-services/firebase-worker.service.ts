import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import { User } from '../shared-models/user.model';
import {EventManagerService} from "./event-manager.service";

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService {
  signInEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private readonly eventManagerService: EventManagerService,
    private router: Router
  ) {}

  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {

        const loginEventMessage: Record<string, any> = {
          type: 'login',
          body: result.user
        }

        this.eventManagerService.autEventHandler.emit(loginEventMessage)

        localStorage['user'] = JSON.stringify(result.user);

      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(user: User, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {
        console.log(result, '---singUp');
        this.sendVerificationMail();
        this.setUserDataSingUp(result.user, user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleAuth() {
    return this.auth
      .signInWithPopup(new firebase.GoogleAuthProvider())
      .then((result) => {
        return this.getUserDoc(result.user?.uid ?? '');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  signOut() {
    return this.auth.signOut().then(() => {
      const logoutEventMessage: Record<string, any> = {
        type: 'logout',
        body: localStorage.getItem('user')
      }

      localStorage.removeItem('user')

      this.eventManagerService.autEventHandler.emit(logoutEventMessage)

      this.router.navigate(['/']);
    });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  sendVerificationMail() {
    return this.auth.currentUser.then((u: any) => u.sendEmailVerification());
  }

  private getUserDoc(id: string): any {
    return this.firestore.collection('users').doc(id)
  }

  private setUserDataSingUp(fireUser: any, user: User) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      firstName: user.firstName,
      email: fireUser.email,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      verifiedUser: true,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
