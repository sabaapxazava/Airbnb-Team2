import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private firestore: AngularFirestore) {}

  updateUser(user: User, id: any) {
    return this.firestore.collection('users').doc(id).update({
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
    });
  }
}
