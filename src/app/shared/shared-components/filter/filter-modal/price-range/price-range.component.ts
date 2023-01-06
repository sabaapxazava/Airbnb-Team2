import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private filterInfo: FilterModalDataComunicationService,
    private router: Router
  ) {}
  ngAfterContentChecked(): void {
    this.filterInfo.filterModalInfo.PriceFrom = this.minValue;
    this.filterInfo.filterModalInfo.PriceTo = this.maxValue;
  }

  ngOnInit(): void {}
}
