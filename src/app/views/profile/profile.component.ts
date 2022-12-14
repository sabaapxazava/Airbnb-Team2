import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  reservedHotelArray = [
    {
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      name: 'alibaba',
      location: 'kutaisi',
      price: 195,
      pay:2431,
    },
    {
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      name: 'alibaba',
      location: 'kutaisi',
      price: 195,
      pay:2431,
    },
    {
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      name: 'alibaba',
      location: 'kutaisi',
      price: 195,
      pay:2431,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
