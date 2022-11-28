import {AfterContentChecked,AfterViewChecked,Component,OnChanges,OnInit,Output,SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inner-hotel-pg',
  templateUrl: './inner-hotel-pg.component.html',
  styleUrls: ['./inner-hotel-pg.component.scss'],
})
export class InnerHotelPgComponent implements OnInit, AfterViewChecked {

  @Output()
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

  constructor(private activatedRoute: ActivatedRoute) {}
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  hotelId = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
  }

  numberOfDaysChanged(numberofdays:any){
    this.numberOfDays = numberofdays;
    this.cost = this.numberOfDays * this.currentHotel.price;
  }
}
