import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;

  selectedIndex = 0;

  constructor() {}

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
    console.log('add wishlist');
  }


}
