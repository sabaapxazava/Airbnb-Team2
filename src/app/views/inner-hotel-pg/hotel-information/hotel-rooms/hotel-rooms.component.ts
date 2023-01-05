import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.scss']
})
export class HotelRoomsComponent implements OnInit {
  @Input() HotelRooms!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
