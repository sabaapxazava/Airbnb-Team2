import { Component, OnInit } from '@angular/core';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  reservedHotelArray: any[] = [];
  constructor(private reservedService: ReservedService) {}

  ngOnInit(): void {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    if (activeUserId != null) {
      this.reservedService
        .getReservedHotel(activeUserId)
        .subscribe((res: any) => {
          this.reservedHotelArray = res.reservedHotels;
        });
    }
  }
}
