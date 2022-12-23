import { JsonPipe } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { environment } from 'src/environments/environment';
import { Hotel } from '../../shared-models/hotel.model';

@Component({
  selector: 'app-reserved-card',
  templateUrl: './reserved-card.component.html',
  styleUrls: ['./reserved-card.component.scss'],
})
export class ReservedCardComponent implements OnInit {
  selectedIndex = 0;
  // card = {
  //   mainImages: [
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/4e9d046b-0499-4d12-ada5-401fa81102da.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/47ffe728-6a81-4131-a3f3-d27011285cb6.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/08376782-a69b-4f94-9ea2-6d31a42fe105.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/93c92cb4-b0ea-4284-a06e-17e5dab1daa7.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/0063b23e-e251-4bca-b4e4-c9e7df8823c1.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9f680175-524d-47f7-9814-a88b9bc42096.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/6ede07d4-3860-4db6-b442-53e9ac39f59a.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/256a9de1-450f-4a58-a6df-85d9b733da34.jpeg?im_w=1200',
  //     'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/c03ffc78-1072-4d8b-ab6e-7acf36575b8b.jpeg?im_w=1200',
  //   ],
  //   name: 'Terrasini, Italy',
  //   starCount: 4,
  //   rooms: [
  //     {
  //       images: [
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/4e9d046b-0499-4d12-ada5-401fa81102da.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/47ffe728-6a81-4131-a3f3-d27011285cb6.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/08376782-a69b-4f94-9ea2-6d31a42fe105.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/93c92cb4-b0ea-4284-a06e-17e5dab1daa7.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/0063b23e-e251-4bca-b4e4-c9e7df8823c1.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9f680175-524d-47f7-9814-a88b9bc42096.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/6ede07d4-3860-4db6-b442-53e9ac39f59a.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/256a9de1-450f-4a58-a6df-85d9b733da34.jpeg?im_w=1200',
  //         'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/c03ffc78-1072-4d8b-ab6e-7acf36575b8b.jpeg?im_w=1200',
  //       ],
  //       price: 185,
  //     },
  //   ],
  // };
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
