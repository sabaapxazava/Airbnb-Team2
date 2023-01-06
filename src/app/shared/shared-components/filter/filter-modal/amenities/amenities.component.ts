import { Component, OnInit } from '@angular/core';
import { AmenitiesService } from 'src/app/shared/shared-services/amenities.service';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
})
export class AmenitiesComponent implements OnInit {
  showMore = true;
  Amenities: [] = [];

  onShowMore() {
    this.showMore = !this.showMore;
  }

  constructor(
    private filterModalInfo: FilterModalDataComunicationService,
    private amenitiesService: AmenitiesService
  ) {}

  ngOnInit(): void {
    this.amenitiesService.getAllAmenities().subscribe((response) => {
      this.Amenities = response;
    });

    this.filterModalInfo.resetValueEmitter.subscribe(() => {
      console.log(event);
    });
  }

  onAmenities(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.Amenities.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.Amenities.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.Amenities.splice(index, 1);
    }
  }
}
