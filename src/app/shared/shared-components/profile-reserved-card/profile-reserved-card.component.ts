import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../shared-models/hotel.model';

@Component({
  selector: 'app-profile-reserved-card',
  templateUrl: './profile-reserved-card.component.html',
  styleUrls: ['./profile-reserved-card.component.scss'],
})
export class ProfileReservedCardComponent implements OnInit {
  @Input()
  card!: Hotel;

  @Input()
  startDate!: any;

  @Input()
  endDate!: any;

  @Input()
  reservedDate!: any;

  @Input()
  price!: any;

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

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
}
