import { Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

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

  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}

  onEssntials(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.amenities.essentials.push(
        e.target.value
      );
    } else {
      let index =
        this.filterModalInfo.filterModalInfo.amenities.essentials.indexOf(
          e.target.value
        );
      this.filterModalInfo.filterModalInfo.amenities.essentials.splice(
        index,
        1
      );
    }
  }
  onFeatures(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.amenities.features.push(
        e.target.value
      );
    } else {
      let index =
        this.filterModalInfo.filterModalInfo.amenities.features.indexOf(
          e.target.value
        );
      this.filterModalInfo.filterModalInfo.amenities.features.splice(index, 1);
    }
  }
  onLocation(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.amenities.location.push(
        e.target.value
      );
    } else {
      let index =
        this.filterModalInfo.filterModalInfo.amenities.location.indexOf(
          e.target.value
        );
      this.filterModalInfo.filterModalInfo.amenities.location.splice(index, 1);
    }
  }
  onSafety(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.amenities.safety.push(
        e.target.value
      );
    } else {
      let index = this.filterModalInfo.filterModalInfo.amenities.safety.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.amenities.safety.splice(index, 1);
    }
  }
}
