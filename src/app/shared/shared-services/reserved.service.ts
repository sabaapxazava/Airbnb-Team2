import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { reservedHotel } from '../shared-models/reservedHotel.model';

@Injectable({
  providedIn: 'root',
})
export class ReservedService {
  constructor(private firestore: AngularFirestore, private router: Router) {}

  getReservedHotel(id: string): Observable<any> {
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  deleteReservedHotel(userid: any, index: any) {
    const userRef = this.firestore.collection('users').doc(userid);
    userRef.get().subscribe((res) => {
      let data: any = res.data();

      data.reservedHotels.splice(index, 1);
      userRef.update({ reservedHotels: data.reservedHotels });
    });
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
        userRef.update({ reservedHotels: reservedHotels });
      }
    });
    this.router.navigate(['/trip']);
    return true;
  }
}
