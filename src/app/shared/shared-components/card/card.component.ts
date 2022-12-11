import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;

  selectedIndex = 0;

  auth!: boolean;
  constructor(private angularFireAuth: AngularFireAuth,private dialog: MatDialog,) {
    var self = this;
    this.angularFireAuth.onAuthStateChanged(function (user) {
      if (user) {
        self.auth = true;
      } else {
        self.auth = false;
      }
    });
  }

  ngOnInit(): void {}

  // dot click
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex == 0) {
      this.selectedIndex = this.card.img.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.card.img.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  addCardInWishlist() {
    if (this.auth) {
      alert('Added');
    } else {
      this.dialog.open(LoginComponent);
    }
  }
}
