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
        BedsPerRoomCount:
          this.filterModalInfo.filterModalInfo.roomsAndBeds.beds,
        // BedsPerRoomCount:
        //   this.filterModalInfo.filterModalInfo.roomsAndBeds.beds,
        // RoomsCount: this.filterModalInfo.filterModalInfo.roomsAndBeds.bedrooms,
        // BathRoomsCount:
        //   this.filterModalInfo.filterModalInfo.roomsAndBeds.bathrooms,
        // PropertyType: this.filterModalInfo.filterModalInfo.propertyOfType,
        // HostLanguage: this.filterModalInfo.filterModalInfo.hostLanguage,
        // Amenities: this.filterModalInfo.filterModalInfo.amenities.essentials,
      },
    });
    this.filterModalInfo.advancedFilterEmitter.emit();
  }

  // onShowHomes() {
  //   this.testbul = !this.testbul;
  //   console.log((this.testbul = !this.testbul));
  //   // console.log(this.filterModalInfo.filterModalInfo);
  //   if ((this.testbul = !this.testbul)) {
  //     this.router.navigate(['filtered-hotels/advanced-filter'], {
  //       queryParams: {
  //         PriceFrom: this.filterModalInfo.filterModalInfo.priceRange.minPrice,
  //         PriceTo: this.filterModalInfo.filterModalInfo.priceRange.maxPrice,
  //         TypeOfPlace: this.filterModalInfo.filterModalInfo.typeOfPlace,
  //         BedsPerRoomCount:
  //           this.filterModalInfo.filterModalInfo.roomsAndBeds.beds,
  //       },
  //     });
  //     this.sendFilterdHotels();
  //     this.filterModalInfo.advancedFilterEmitter.emit();
  //   } else {
  //     // this.testbul = false;
  //   }
  // }

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
