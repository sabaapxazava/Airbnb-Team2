import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  reservedHotelArray: any[] = [];
  constructor(
    private baseHttpService: BaseHttpService,
    private reservedService: ReservedService
  ) {}

  ngOnInit(): void {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    if (activeUserId != null) {
      this.reservedService
        .getReservedHotel(activeUserId)
        .subscribe((res: any) => {
          this.reservedHotelArray = [];

          res.reservedHotels.forEach((el: any, index: any) => {
            this.baseHttpService
              .getById(`${environment.baseApiUrl}/Hotel/${el.hotelId}`)
              .subscribe((res: any) => {
                let fullReservedHotelInfo = {
                  startDate: el.startDate,
                  endDate: el.endDate,
                  price: el.pricePaid,
                  reservedDate: el.reserveDate,
                  hotel: res,
                  index: index,
                };
                this.reservedHotelArray.push(fullReservedHotelInfo);
              });
          });
        });
    }
  }
}
