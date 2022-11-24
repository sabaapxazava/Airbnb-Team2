import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inner-hotel-pg',
  templateUrl: './inner-hotel-pg.component.html',
  styleUrls: ['./inner-hotel-pg.component.scss'],
})
export class InnerHotelPgComponent implements OnInit, AfterViewChecked {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  currentHotel = {
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    title: 'Los Veneros, Punta Mita, Mexico',
    address: '12, square times , Mexico, America',
    price: 45,
    description: `I was able to use this technique to include a secondary child div inside of
     the "child" div in the example. A media rule in my CSS file lets me then show the new child-child 
     content to the right of the original content on wide screens and below it and smaller on narrow screens,
      and it's all still vertically centered. In other words,`,
    hotelRoomsImages: [
      {
        thumbImage:
          'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        thumbImage:
          'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ],
  };

  cost: any = 0;
  numberOfDays: any = 0;
  startDate!: any;
  endDate!: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  hotelId = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    if (
      this.range.controls.start.value != null &&
      this.range.controls.end.value != null
    ) {
      this.startDate = this.range.controls.start.value.getDate();
      this.endDate = this.range.controls.end.value.getDate();
      this.numberOfDays = this.endDate - this.startDate;
      this.cost = this.numberOfDays * this.currentHotel.price;

      console.log('start date', this.startDate);
      console.log('end date', this.endDate);
      console.log(this.numberOfDays);

      this.endDate = null;
      this.startDate = null;
    }
  }
}
