import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';
import { environment } from 'src/environments/environment.prod';
import { WishlistService } from 'src/app/shared/shared-services/wishlist.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  reservedHotelArray: any[] = [];
  wishlistArray: any[] = [];
  constructor(
    private wshlistService: WishlistService,
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
        .subscribe(async(res: any) => {
          this.reservedHotelArray = res.reservedHotels;
          if(this.wishlistArray.length != 0){
            this.wishlistArray = [];
            console.log(this.wishlistArray, "Ssss")
          }
          await res.wishlist.forEach(async(item: Hotel) => {
            let winished = true;
            this.baseHttpService
              .getById(`${environment.baseApiUrl}/Hotel/${item}`)
              .subscribe((item) => {
                this.wishlistArray.push(item);
                winished = false;
              });
          });
          this.wshlistService.loadWishlist(activeUserId)
        });
    }
  }
}
