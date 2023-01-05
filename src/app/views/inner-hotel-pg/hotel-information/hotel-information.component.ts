import { Component, Input, OnInit } from '@angular/core';
import { HotelModelModule } from 'src/app/shared/shared-models/hotel-model.model';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-information',
  templateUrl: './hotel-information.component.html',
  styleUrls: ['./hotel-information.component.scss']
})
export class HotelInformationComponent implements OnInit {
  @Input() currentHotel!:Hotel;
  
  constructor() { }
  images:any[] = [];
  ngOnInit(): void {
    this.currentHotel.rooms.map(room => {
      return room.images.map(image => {
        return {image: image, thumbImage: image,
                  alt: 'alt of image',
                  title: room.name
                }
      })
    }).forEach(image => image.forEach(image => this.images.push(image)))
    console.log(this.currentHotel)
  }

}
