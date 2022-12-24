import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../shared-models/user.model';
@Injectable({
  providedIn: 'root',
})
export class WishlistService{
  constructor(private firestore: AngularFirestore) {
    let getWishlist = this.getWishlist();
    getWishlist.subscribe(data => {
      this.wishlistEmitter.emit({
        Data: data.wishlist,
      });
      console.log(data)
    })
  }

  ngOnInit(): void {
  }
  wishlistEmitter: EventEmitter<any> = new EventEmitter();
  ss!:Observable<any>;
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
      }
    });
    return true;
  }
  getWishlist():Observable<any>{
    let id = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;
    return this.firestore.collection('users').doc(id).valueChanges();
  }
}
