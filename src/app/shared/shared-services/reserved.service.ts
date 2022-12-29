import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservedService {
  constructor(private firestore: AngularFirestore) {}

  getUser(id: string): Observable<any> {
    return this.firestore.collection('users').doc(id).valueChanges();
  }
}
