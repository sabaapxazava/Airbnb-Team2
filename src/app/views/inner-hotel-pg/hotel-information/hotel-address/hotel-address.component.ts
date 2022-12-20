import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-address',
  templateUrl: './hotel-address.component.html',
  styleUrls: ['./hotel-address.component.scss']
})
export class HotelAddressComponent implements OnInit {
  @Input() HotelAddress:any;
  constructor() { }

  ngOnInit(): void {
  }

}
