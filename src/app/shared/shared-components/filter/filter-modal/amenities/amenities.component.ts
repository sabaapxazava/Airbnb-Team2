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
  amenities: [] = [];

  onShowMore() {
    this.showMore = !this.showMore;
  }

  constructor(
    private filterModalInfo: FilterModalDataComunicationService,
    private amenitiesService: AmenitiesService
  ) {}

  ngOnInit(): void {
    this.amenitiesService.getAllAmenities().subscribe((response) => {
      this.amenities = response;
    });
  }

  onAmenities(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.amenities.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.amenities.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.amenities.splice(index, 1);
    }
  }
}
