import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.scss']
})
export class HotelDescriptionComponent implements OnInit {

  @Input() currentHotel!:Hotel;
  constructor() { }

  ngOnInit(): void {
  }

}
