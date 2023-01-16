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
      self.loadWishlist(user);
    });
  }
  loadWishlist(user: any){
    if (user) {
      let id = localStorage['user']
        ? JSON.parse(localStorage['user']).uid
        : null;
      this.getWishlistFunc = this.getWishlist(id);
      if (this.getWishlistFunc) {
        if(this.getWishlistSubscriber != undefined){
          this.getWishlistSubscriber.unsubscribe()
        }
        this.getWishlistSubscriber = this.getWishlistFunc.subscribe(
          (data: any) => {
            this.wishlistEmitter.emit({
              Data: data.wishlist,
            });
          }
        );
      }
    }
    if (!user) {
      if (this.getWishlistSubscriber != undefined) {
        this.getWishlistSubscriber.unsubscribe();
      }
      this.wishlistEmitter.emit({
        Data: [],
      });
    }
  }
  getWishlistSubscriber!: any;
  getWishlistFunc!: any;
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
        console.log(data.wishlist);
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
