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
  startDateEndDate: any = 0;
  // currentHotelId:string = this.currentHotel.id;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  numberOfDaysChanged(numberofdays: any) {
    this.numberOfDays = numberofdays;
    this.cost = this.numberOfDays * this.currentHotel.rooms[0].price;
  }

  reservationBtn() {
    this.router.navigate(['/reservation'], {
      queryParams: {
        numberOfDays: this.numberOfDays,
        cost: this.cost,
        currentHotelId: this.currentHotel.id,
        startDateEndDate: JSON.stringify(this.startDateEndDate)
      },
    });
  }
  StartDateEndDate(dates:any){
    this.startDateEndDate = dates;
  }
}
