import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  cost: any;
  numberOfDays: any;
  currentHotelId: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cost = params['cost'];
      this.numberOfDays = params['numberOfDays'];
      this.currentHotelId = params['currentHotelId'];
    });
  }
}
