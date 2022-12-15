import { Component, OnInit } from '@angular/core';
import { FilterInfo } from 'src/app/shared/shared-models/filterInfo.model';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-footer',
  templateUrl: './filter-footer.component.html',
  styleUrls: ['./filter-footer.component.css'],
})
export class FilterFooterComponent implements OnInit {
  constructor(
    private filterModalInfo: FilterModalDataComunicationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onShowHomes() {
    console.log(this.filterModalInfo.filterModalInfo);
    this.router.navigate(['filtered-hotels'], {
      queryParams: {
        amenities: {
          essentials: this.filterModalInfo.filterModalInfo.amenities.essentials,
          features: this.filterModalInfo.filterModalInfo.amenities.features,
          location: this.filterModalInfo.filterModalInfo.amenities.location,
          safety: this.filterModalInfo.filterModalInfo.amenities.safety,
        },

        priceRange: {
          PriceFrom: this.filterModalInfo.filterModalInfo.priceRange.minPrice,
          PriceTo: this.filterModalInfo.filterModalInfo.priceRange.maxPrice,
        },
      },
    });
  }
  onClearAll() {
    // this.filterModalInfo.filterModalInfo = {
    //   priceRange: {
    //     minPrice: 0,
    //     maxPrice: 0,
    //   },
    //   typeOfPlace: [],
    //   roomsAndBeds: {
    //     bedrooms: 'any',
    //     beds: 'any',
    //     bathrooms: 'any',
    //   },
    //   propertyOfType: [],
    //   amenities: {
    //     essentials: [],
    //     features: [],
    //     location: [],
    //     safety: [],
    //   },
    //   hostLanguage: [],
    // };
    // console.log(this.filterModalInfo.filterModalInfo);

    this.filterModalInfo.filterModalInfo = new FilterInfo();
    console.log(this.filterModalInfo.filterModalInfo);
  }
}
