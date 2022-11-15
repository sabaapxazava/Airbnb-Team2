import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-requested-regions',
  templateUrl: './most-requested-regions.component.html',
  styleUrls: ['./most-requested-regions.component.scss'],
})
export class MostRequestedRegionsComponent implements OnInit {
  cards = [
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
    {
      img: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      title: 'Los Veneros, Punta Mita, Mexico',
      reiting: '4.5',
      price: 380,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
