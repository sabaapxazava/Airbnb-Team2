import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { User } from 'src/app/shared/shared-models/user.model';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
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
    // console.log(this.reservedHotelArray, 'reservedHotelArray');
  }
}
