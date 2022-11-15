import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-and-beds',
  templateUrl: './rooms-and-beds.component.html',
  styleUrls: ['./rooms-and-beds.component.css'],
})
export class RoomsAndBedsComponent implements OnInit {
  bedrooms: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  beds: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bathrooms: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {}

  ngOnInit(): void {}
}
