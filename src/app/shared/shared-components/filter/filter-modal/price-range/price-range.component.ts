import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css'],
})
export class PriceRangeComponent implements OnInit, AfterContentChecked {
  minValue: number = 100;
  maxValue: number = 600;
  options: Options = {
    floor: 0,
    ceil: 700,
  };
  constructor(private filterInfo: FilterModalDataComunicationService) {}
  ngAfterContentChecked(): void {
    this.filterInfo.filterModalInfo.priceRange.minPrice = this.minValue;
    this.filterInfo.filterModalInfo.priceRange.maxPrice = this.maxValue;
  }

  ngOnInit(): void {}
}
