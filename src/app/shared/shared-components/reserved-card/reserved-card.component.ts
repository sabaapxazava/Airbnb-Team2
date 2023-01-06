import { JsonPipe } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { environment } from 'src/environments/environment';
import { Hotel } from '../../shared-models/hotel.model';

@Component({
  selector: 'app-reserved-card',
  templateUrl: './reserved-card.component.html',
  styleUrls: ['./reserved-card.component.scss'],
})
export class ReservedCardComponent implements OnInit {
  selectedIndex = 0;

  curentCardImages: any = [];
  
  @Input()
  card!: Hotel;

  @Input()
  cost!: any;

  @Input()
  numberOfDays!: any;

  @Input()
  currentHotelId!: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.cost, 'reserved-card');
    console.log(this.numberOfDays, 'reserved-card');
    console.log(this.currentHotelId, 'reserved-card');
    console.log(this.card.mainImages)
  }

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
