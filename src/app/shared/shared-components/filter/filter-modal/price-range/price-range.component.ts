import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css'],
})
export class PriceRangeComponent implements OnInit {
  minValue: number = 100;
  maxValue: number = 600;
  options: Options = {
    floor: 0,
    ceil: 700,
  };
  constructor() {}

  ngOnInit(): void {}
}
