import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelModelModule } from 'src/app/shared/shared-models/hotel-model.model';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-reserve',
  templateUrl: './hotel-reserve.component.html',
  styleUrls: ['./hotel-reserve.component.scss'],
})
export class HotelReserveComponent implements OnInit {
  @Input() currentHotel!: Hotel;
  cost: any = 0;
  numberOfDays: any = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  numberOfDaysChanged(numberofdays: any) {
    this.numberOfDays = numberofdays;
    this.cost = this.numberOfDays * this.currentHotel.rooms[0].price;
  }

  reservationBtn() {
    console.log('reservation');
    this.router.navigate(['/reservation']);
    console.log(this.numberOfDays);
    console.log(this.cost);
  }
}
