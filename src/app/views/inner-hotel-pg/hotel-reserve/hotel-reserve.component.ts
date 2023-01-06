import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/shared/shared-components/auth/login/login.component';
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

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}
  numberOfDaysChanged(numberofdays: any) {
    this.numberOfDays = numberofdays;
    this.cost = this.numberOfDays * this.currentHotel.rooms[0].price;
  }

  reservationBtn() {
    let id = localStorage['user'] ? JSON.parse(localStorage['user']).uid : null;
    if (id) {
      this.router.navigate(['/reservation'], {
        queryParams: {
          numberOfDays: this.numberOfDays,
          cost: this.cost,
          currentHotelId: this.currentHotel.id,
          startDateEndDate: JSON.stringify(this.startDateEndDate),
        },
      });
    } else {
      this.dialog.open(LoginComponent);
    }
  }
  StartDateEndDate(dates: any) {
    this.startDateEndDate = dates;
  }
}
