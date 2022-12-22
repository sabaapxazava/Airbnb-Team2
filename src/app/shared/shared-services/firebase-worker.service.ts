import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import * as firebases from 'firebase/app';
import Swal from 'sweetalert2';
import { User } from '../shared-models/user.model';
import { EventManagerService } from './event-manager.service';
import { observable, Observable } from 'rxjs';

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
          body: result.user,
        };

        this.eventManagerService.autEventHandler.emit(loginEventMessage);

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

      this.eventManagerService.autEventHandler.emit(logoutEventMessage);

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
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  getSavedCreditCards(userId: any) {
    const docRef = this.firestore.collection('users').doc(userId);
    return new Observable<any>(observer => {
        docRef.get().subscribe((doc) => {
          let data:any = doc.data();
          if(data.creditCards){
            observer.next(data.creditCards)
          }
          else{
            observer.next(false)
          }
        }
      );
    });
  }
}
