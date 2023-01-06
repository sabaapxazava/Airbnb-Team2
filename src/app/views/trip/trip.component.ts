import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  reservedHotelArray: any[] = [];
  wishlistArray: any[] = [];
  constructor(
    private reservedService: ReservedService,
    private baseHttpService: BaseHttpService
  ) {}

  ngOnInit(): void {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    if (activeUserId != null) {
      this.reservedService
        .getReservedHotel(activeUserId)
        .subscribe((res: any) => {
          this.reservedHotelArray = res.reservedHotels;

          res.wishlist.forEach((item: Hotel) => {
            this.baseHttpService
              .getById(`${environment.baseApiUrl}/Hotel/${item}`)
              .subscribe((item) => {
                this.wishlistArray.push(item);
              });
          });
        });
    }
  }
}
