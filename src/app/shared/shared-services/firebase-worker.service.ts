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
import { creditCard } from '../shared-models/creditCard.model';
import { reservedHotel } from '../shared-models/reservedHotel.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService {
  signInEmitter: EventEmitter<any> = new EventEmitter();
  wishlistEmitter: EventEmitter<any> = new EventEmitter();
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
        console.log(result.user);
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
  private setUserDataGoogleAuth(fireUser: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
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
  getSavedCreditCards(userId: any) {
    return new Observable<any>((observer) => {
      if (!userId) observer.complete();
      const docRef = this.firestore.collection('users').doc(userId);
      docRef.get().subscribe((doc) => {
        let data: any = doc.data();
        if (data.creditCards) {
          observer.next(data.creditCards);
          observer.complete();
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
  addCreditCard(userId: any, creditCard: creditCard) {
    console.log(userId);
    if (!userId) return false;
    const userRef = this.firestore.collection('users').doc(userId);
    let creditCards: creditCard[] = [creditCard];
    userRef.get().subscribe((doc) => {
      let data: any = doc.data();
      console.log(doc.data());
      if (data.creditCards) {
        if (data.creditCards.length != 0) {
          creditCards = creditCards.concat(data.creditCards as creditCard);
        }
        console.log(creditCards);
        userRef.update({ creditCards: creditCards });
      }
    });
    return true;
  }
  reserveHotel(userId: any, hotel: reservedHotel) {
    if (!userId) return false;
    const userRef = this.firestore.collection('users').doc(userId);
    let reservedHotels: reservedHotel[] = [hotel];
    userRef.get().subscribe((doc) => {
      let data: any = doc.data();
      if (data.reservedHotels) {
        if (data.reservedHotels.length != 0) {
          reservedHotels = reservedHotels.concat(data.reservedHotels);
        }
        console.log(reservedHotels);
        userRef.update({ reservedHotels: reservedHotels });
      }
    });
    this.router.navigate(['/profile']);
    return true;
  }
  getHotelFromWishlist(userId: any, hotelId: string) {
      const docRef = this.firestore.collection('users').doc(userId);
      docRef.get().subscribe((doc) => {
        let data: any = doc.data();
        this.wishlistEmitter.emit({Date:data.wishlist.includes(hotelId), id:hotelId});
      });
  }
  AddRemoveFromWishlist(userId: any, hotelId: string) {
    const docRef = this.firestore.collection('users').doc(userId);
    docRef.get().subscribe((doc) => {
      let data: any = doc.data();
      if (data.wishlist) {
        if (data.wishlist.includes(hotelId)) {
          data.wishlist.splice(data.wishlist.indexOf(hotelId), 1);
        } else {
          data.wishlist.push(hotelId);
        }
        console.log(data.wishlist);
        docRef.update({ wishlist: data.wishlist });
        this.wishlistEmitter.emit({Date:data.wishlist.includes(hotelId), id:hotelId});
      }
    });
    return true;
  }
}
