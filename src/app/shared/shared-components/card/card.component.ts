import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Hotel } from '../../shared-models/hotel.model';
import { WishlistService } from '../../shared-services/wishlist.service';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Hotel;

  selectedIndex = 0;
  inWishlist:boolean = false;
  auth!: boolean;
  constructor(private angularFireAuth: AngularFireAuth,private dialog: MatDialog, private wishlist: WishlistService) {
    var self = this;
    this.angularFireAuth.onAuthStateChanged(function (user) {
      if (user) {
        self.auth = true;
      } else {
        self.auth = false;
      }
    });
  }

  ngOnInit(): void {
    this.wishlist.wishlistEmitter.subscribe(data => {
      if(data.Data.includes(this.card.id)){
        this.inWishlist = true;
      }
      else{
        this.inWishlist = false;
      }
    })
  }

  // dot click
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex == 0) {
      this.selectedIndex = this.card.mainImages.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.card.mainImages.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  async addCardInWishlist() {
    if (this.auth) {
      this.wishlist.AddRemoveFromWishlist(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null, this.card.id);
    } else {
      this.dialog.open(LoginComponent);
    }
  }
}
