import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
})
export class AmenitiesComponent implements OnInit {
  showMore = true;
  amenities: any = {
    essentials: [
      'wifi',
      'washer',
      'air conditioning',
      'kitchen',
      'dryer',
      'heating',
      'dedicated workspace',
      'tv',
      'hair dryer',
      'iron',
    ],
    features: [
      'pool',
      'hot tub',
      'free parking on premises',
      'ev charger',
      'crib',
      'gym',
      'breakfest',
    ],
    location: ['beachfront', 'waterfront', 'ski-in/ski-out'],
    safety: ['smoke alarm', 'carbon monoxide alarm'],
  };

  onShowMore() {
    this.showMore = !this.showMore;
  }

  constructor() {}

  ngOnInit(): void {}
}
