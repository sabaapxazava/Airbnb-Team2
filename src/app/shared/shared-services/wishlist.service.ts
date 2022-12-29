import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../shared-models/user.model';
@Injectable({
  providedIn: 'root',
})
export class WishlistService{
  constructor(private firestore: AngularFirestore, private angularFireAuth: AngularFireAuth) {
    let self = this
    this.angularFireAuth.onAuthStateChanged(function (user) {
      let id = localStorage['user']
        ? JSON.parse(localStorage['user']).uid
        : null;
      let getWishlist = self.getWishlist(id);
      let tmp;
      if(getWishlist){
        tmp = getWishlist.subscribe((data :any) => {
          self.wishlistEmitter.emit({
            Data: data.wishlist,
          });
          console.log(data)
        })
        if(!user){
          tmp.unsubscribe()
          self.wishlistEmitter.emit({
            Data: [],
          });
        }
      }
    });
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
  getWishlist(id: any){
    if(!id) return null
    return this.firestore.collection('users').doc(id).valueChanges();
  }
}
