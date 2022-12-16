import { Component, OnInit } from '@angular/core';
import { FilterInfo } from 'src/app/shared/shared-models/filterInfo.model';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { environment } from 'src/environments/environment';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-footer',
  templateUrl: './filter-footer.component.html',
  styleUrls: ['./filter-footer.component.css'],
})
export class FilterFooterComponent implements OnInit {
  cards: any = [];

  constructor(
    private baseHttpService: BaseHttpService,
    private filterModalInfo: FilterModalDataComunicationService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.router.url.slice(32));
    const fullApiUrl = `${environment.baseApiUrl}/Hotel/filter-by-category`;
    this.http
      .get(`${fullApiUrl}${this.router.url.slice(32)}`)
      .subscribe((response) => {
        if (response) {
          this.filterModalInfo.advancedFilterEmitter.emit(response);
          this.cards = response;
          console.log('advanced-filtered-items', response);
        }
      });
  }

  onShowHomes() {
    console.log(this.filterModalInfo.filterModalInfo);
    this.router.navigate(['filtered-hotels/advanced-filter'], {
      queryParams: {
        PriceFrom: this.filterModalInfo.filterModalInfo.priceRange.minPrice,
        PriceTo: this.filterModalInfo.filterModalInfo.priceRange.maxPrice,
        TypeOfPlace: this.filterModalInfo.filterModalInfo.typeOfPlace,
        BedsPerRoomCount:
          this.filterModalInfo.filterModalInfo.roomsAndBeds.beds,
        RoomsCount: this.filterModalInfo.filterModalInfo.roomsAndBeds.bedrooms,
        BathRoomsCount:
          this.filterModalInfo.filterModalInfo.roomsAndBeds.bathrooms,
        PropertyType: this.filterModalInfo.filterModalInfo.propertyOfType,
        HostLanguage: this.filterModalInfo.filterModalInfo.hostLanguage,
        Amenities: this.filterModalInfo.filterModalInfo.amenities.essentials,
      },
    });
    console.log(this.router.url);
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

    //  essentials: this.filterModalInfo.filterModalInfo.amenities.essentials,
    // features: this.filterModalInfo.filterModalInfo.amenities.features,
    // location: this.filterModalInfo.filterModalInfo.amenities.location,
    // safety: this.filterModalInfo.filterModalInfo.amenities.safety,

    this.filterModalInfo.filterModalInfo = new FilterInfo();
    console.log(this.filterModalInfo.filterModalInfo);
  }
}
