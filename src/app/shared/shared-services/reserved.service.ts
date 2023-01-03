import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservedService {
  constructor(private firestore: AngularFirestore) {}

  getReservedHotel(id: string): Observable<any> {
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  deleteReservedHotel(userid: any, index: any) {
    const userRef = this.firestore.collection('users').doc(userid);
    userRef.get().subscribe((res) => {
      let data: any = res.data();
      console.log(data.reservedHotels, '<---');

      data.reservedHotels.splice(index, 1);
      userRef.update({ reservedHotels: data.reservedHotels });
    });
  }
}
