import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import { Subscription } from 'rxjs';
import { User } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService {
  signInEmitter: EventEmitter<any> = new EventEmitter();
  signInSubscription!: Subscription;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.signInSubscription = this.getUserDoc(
          result.user?.uid ?? ''
        ).subscribe((response: any) => {
          localStorage['user'] = JSON.stringify(response);
        });
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
      localStorage.clear();
      this.router.navigate(['/']);
      this.signInSubscription.unsubscribe();
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
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  private setUserDataSingUp(fireUser: any, user: User) {
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
}
