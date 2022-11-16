import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inner-hotel-pg',
  templateUrl: './inner-hotel-pg.component.html',
  styleUrls: ['./inner-hotel-pg.component.scss'],
})
export class InnerHotelPgComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}


  hotelId = this.activatedRoute.snapshot.params['id']

  ngOnInit(): void {
  console.log(this.hotelId);
  }
  
}
