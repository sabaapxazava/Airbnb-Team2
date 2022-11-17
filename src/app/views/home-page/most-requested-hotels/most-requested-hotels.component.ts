import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-requested-hotels',
  templateUrl: './most-requested-hotels.component.html',
  styleUrls: ['./most-requested-hotels.component.scss'],
})
export class MostRequestedHotelsComponent implements OnInit {
  cards = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
