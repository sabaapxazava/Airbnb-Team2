import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;

  // cards = [
  //   {
  //     img: [
  //       'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  //       'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //       'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //       'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  //       'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     ],
  //     title: 'Los Veneros, Punta Mita, Mexico',
  //     reiting: '4.5',
  //     price: 380,
  //   },
  // ];

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
