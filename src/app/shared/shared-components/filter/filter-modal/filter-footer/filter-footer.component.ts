import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FilterInfo } from 'src/app/shared/shared-models/filterInfo.model';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/shared-services/category.service';

@Component({
  selector: 'app-filter-footer',
  templateUrl: './filter-footer.component.html',
  styleUrls: ['./filter-footer.component.css'],
})
export class FilterFooterComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private filterModalInfo: FilterModalDataComunicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterContentChecked() {}

  onShowHomes() {
    this.router.navigate(['filtered-hotels/advanced-filter'], {
      queryParams: {
        PriceFrom: this.filterModalInfo.filterModalInfo.priceRange.minPrice,
        PriceTo: this.filterModalInfo.filterModalInfo.priceRange.maxPrice,
        TypeOfPlace:
          this.filterModalInfo.filterModalInfo.typeOfPlace.toString(),
        RoomsCount: this.filterModalInfo.filterModalInfo.roomsAndBeds.bedrooms,
        BedsPerRoomCount:
          this.filterModalInfo.filterModalInfo.roomsAndBeds.beds,
        BathRoomsCount:
          this.filterModalInfo.filterModalInfo.roomsAndBeds.bathrooms,
        PropertyType: [...this.filterModalInfo.filterModalInfo.propertyOfType],
        HostLanguage: this.filterModalInfo.filterModalInfo.hostLanguage,
        Amenities: this.filterModalInfo.filterModalInfo.amenities,
      },
    });
    this.filterModalInfo.advancedFilterEmitter.emit();
  }

  onClearAll() {
    this.filterModalInfo.filterModalInfo = {
      priceRange: {
        minPrice: 0,
        maxPrice: 0,
      },
      typeOfPlace: [],
      roomsAndBeds: {
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
      },
      propertyOfType: [],
      amenities: [],
      hostLanguage: [],
    };

    this.filterModalInfo.filterModalInfo = new FilterInfo();
    console.log(this.filterModalInfo.filterModalInfo);
  }
}
