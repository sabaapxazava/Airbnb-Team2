import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.scss']
})
export class HotelDescriptionComponent implements OnInit {

  @Input() Hoteldescription!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
