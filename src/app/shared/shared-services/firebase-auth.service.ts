import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  // DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import Swal from 'sweetalert2';
import { User } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  signInEmitter: EventEmitter<any> = new EventEmitter();
  wishlistEmitter: EventEmitter<any> = new EventEmitter();
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const loginEventMessage: Record<string, any> = {
          type: 'login',
          body: result.user,
        };

        localStorage['user'] = JSON.stringify(result.user);
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }

  signUp(user: User, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserDataSingUp(result.user, user);
        localStorage['user'] = JSON.stringify(result.user);
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }

  googleAuth() {
    return this.auth
      .signInWithPopup(new firebase.GoogleAuthProvider())
      .then((result) => {
        localStorage['user'] = JSON.stringify(result.user);
        this.setUserDataGoogleAuth(result.user);
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }

  signOut() {
    return this.auth.signOut().then(() => {
      const logoutEventMessage: Record<string, any> = {
        type: 'logout',
        body: localStorage.getItem('user'),
      };

      localStorage.removeItem('user');

      this.router.navigate(['/']);
    });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        Swal.fire('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  }

  sendVerificationMail() {
    return this.auth.currentUser.then((u: any) => u.sendEmailVerification());
  }

  private getUserDoc(id: string): any {
    return this.firestore.collection('users').doc(id);
  }
  private async setUserDataGoogleAuth(fireUser: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    userRef.get().subscribe((doc) => {
      let data: any = doc.data();
      if(data){
        return true
      }
      console.log(data)
      const userData: User = {
        id: fireUser.uid,
        fullName: fireUser.displayName,
        email: fireUser.email,
        phoneNumber: fireUser.phoneNumber,
        gender: '',
        verifiedUser: true,
        creditCards: [],
        reservedHotels: [],
        wishlist: [],
      };
      return userRef.set(userData, {
        merge: true,
      });
    });
  }
  private setUserDataSingUp(fireUser: any, user: User) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      fullName: user.fullName,
      email: fireUser.email,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      verifiedUser: true,
      creditCards: [],
      reservedHotels: [],
      wishlist: [],
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
