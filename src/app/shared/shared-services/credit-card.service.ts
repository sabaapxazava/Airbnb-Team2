import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../shared-models/user.model';
import { creditCard } from '../shared-models/creditCard.model'
@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private firestore: AngularFirestore) { }


  getSavedCreditCards():Observable<any>{
    let id = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;
    return this.firestore.collection('users').doc(id).valueChanges();
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
}