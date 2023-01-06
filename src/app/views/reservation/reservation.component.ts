import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { creditCard } from 'src/app/shared/shared-models/creditCard.model';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { reservedHotel } from 'src/app/shared/shared-models/reservedHotel.model';
import { CreditCardService } from 'src/app/shared/shared-services/credit-card.service';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  cost: any;
  numberOfDays: any;
  currentHotelId: any;
  startDate!: Date;
  endDate!: Date;
  card: Hotel = new Hotel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private baseHttpService: BaseHttpService,
    private reserve: ReservedService,
    private CreditCardService: CreditCardService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cost = params['cost'];
      this.numberOfDays = params['numberOfDays'];
      this.currentHotelId = params['currentHotelId'];
      let startDateEndDate = JSON.parse(params['startDateEndDate']);
      this.startDate = startDateEndDate.startDate;
      this.endDate = startDateEndDate.endDate;
      const fullApiUrl = `${environment.baseApiUrl}/Hotel/${this.currentHotelId}`;
      this.baseHttpService.getById<Hotel>(fullApiUrl).subscribe((res: any) => {
        this.card = res;
      });
    });
  }

  ngOnInit(): void {}
  onSubmit(card: any) {
    let reserveDate = new Date();
    console.log(card.value);
    if (card.value.saveCreditCard) {
      delete card.value.saveCreditCard;
      this.CreditCardService.addCreditCard(
        JSON.parse(localStorage['user']).uid
          ? JSON.parse(localStorage['user']).uid
          : null,
        card.value as creditCard
      );
    }
    let reservedHotel: reservedHotel = {
      hotelId: this.currentHotelId,
      startDate: this.startDate,
      endDate: this.endDate,
      pricePaid: this.cost,
      reserveDate: reserveDate,
      hotel: this.card,
    };
    console.log(
      this.reserve.reserveHotel(
        JSON.parse(localStorage['user']).uid
          ? JSON.parse(localStorage['user']).uid
          : null,
        reservedHotel
      )
    );
  }
}
