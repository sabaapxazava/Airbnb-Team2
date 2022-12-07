import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/auth';
import { User } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService {
  signInEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

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

  sendVerificationMail() {
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
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

  setUserDataSingUp(fireUser: any, user: User) {
    console.log(user, '-- setUserData');

    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      firstName: fireUser.displayName,
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

  getUserDoc(id: string): any {
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  SignIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result, '---singIn');
        this.auth.authState.subscribe((user) => {
          if (user) {
            // alert('sasces')
          }
        });
        return this.getUserDoc(result.user?.uid ?? '');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // google Auth
  googleAuth() {
    return this.authLogin(new firebase.GoogleAuthProvider());
  }

  authLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        return this.getUserDoc(result.user?.uid ?? '');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // end google Auth

  signOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
