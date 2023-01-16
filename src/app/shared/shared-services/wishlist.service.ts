import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    let self = this;
    this.angularFireAuth.onAuthStateChanged(function (user) {
      if (user) {
        let id = localStorage['user']
          ? JSON.parse(localStorage['user']).uid
          : null;
        self.getWishlistFunc = self.getWishlist(id);
        if (self.getWishlistFunc) {
          self.getWishlistSubscriber = self.getWishlistFunc.subscribe(
            (data: any) => {
              self.wishlistEmitter.emit({
                Data: data.wishlist,
              });
            }
          );
        }
      }
      if (!user) {
        if (typeof self.getWishlistSubscriber == 'object') {
          self.getWishlistSubscriber.unsubscribe();
        }
        self.wishlistEmitter.emit({
          Data: [],
        });
      }
    });
  }
  getWishlistSubscriber!: any;
  getWishlistFunc!: any;
  ngOnInit(): void {}
  wishlistEmitter: EventEmitter<any> = new EventEmitter();
  ss!: Observable<any>;
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
        docRef.update({ wishlist: data.wishlist });
      }
    });
    return true;
  }
  getWishlist(id: any) {
    if (!id) return null;
    return this.firestore.collection('users').doc(id).valueChanges();
  }
}
