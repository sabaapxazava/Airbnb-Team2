import { Component, OnInit } from '@angular/core';
import { FilterInfo } from 'src/app/shared/shared-models/filterInfo.model';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { Router } from '@angular/router';

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
    this.router.navigate(['filtered-hotels/advanced-filter'], {
      queryParams: {
        PriceFrom: this.filterModalInfo.filterModalInfo.PriceFrom,
        PriceTo: this.filterModalInfo.filterModalInfo.PriceTo,
        TypeOfPlace: this.filterModalInfo.filterModalInfo.TypeOfPlace,
        RoomsCount: this.filterModalInfo.filterModalInfo.RoomsCount,
        BedsPerRoomCount: this.filterModalInfo.filterModalInfo.BedsPerRoomCount,
        BathRoomsCount: this.filterModalInfo.filterModalInfo.BathRoomsCount,
        PropertyType: this.filterModalInfo.filterModalInfo.propertyOfType,
        HostLanguages: this.filterModalInfo.filterModalInfo.HostLanguage,
        Amenities: this.filterModalInfo.filterModalInfo.Amenities,
      },
    });
    this.filterModalInfo.advancedFilterEmitter.emit();
  }

  onClearAll() {
    this.filterModalInfo.filterModalInfo = {
      PriceFrom: 0,
      PriceTo: 0,
      Amenities: [],
      TypeOfPlace: [],
      RoomsCount: 0,
      BedsPerRoomCount: 0,
      BathRoomsCount: 0,
      propertyOfType: '',
      HostLanguage: [],
    };

    this.filterModalInfo.filterModalInfo = new FilterInfo();

    this.filterModalInfo.resetValueEmitter.emit();
    console.log(this.filterModalInfo.filterModalInfo);
  }
}
