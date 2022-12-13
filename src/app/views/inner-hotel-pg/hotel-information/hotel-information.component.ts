import { Component, Input, OnInit } from '@angular/core';
import { HotelModelModule } from 'src/app/shared/shared-models/hotel-model.model';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-information',
  templateUrl: './hotel-information.component.html',
  styleUrls: ['./hotel-information.component.scss']
})
export class HotelInformationComponent implements OnInit {
  @Input() currentHotel!:Hotel;
  constructor() { }

  ngOnInit(): void {
  }

}
