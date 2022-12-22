import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-name',
  templateUrl: './hotel-name.component.html',
  styleUrls: ['./hotel-name.component.scss']
})
export class HotelNameComponent implements OnInit {
  @Input() currentHotel!:Hotel;
  constructor() { }

  ngOnInit(): void {
  }

}
