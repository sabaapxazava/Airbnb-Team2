import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
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
  card:Hotel = new Hotel;

  constructor(private activatedRoute: ActivatedRoute, private baseHttpService: BaseHttpService) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cost = params['cost'];
      this.numberOfDays = params['numberOfDays'];
      this.currentHotelId = params['currentHotelId'];
      const fullApiUrl = `${environment.baseApiUrl}/Hotel/${this.currentHotelId}`;
      this.baseHttpService.getById<Hotel>(fullApiUrl).subscribe((res: any) => {
        this.card = res
      });
    });
  }

  ngOnInit(): void {
  }
}
