import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


interface HotelRoomsImage {
  thumbImage: string;
}
export class HotelModelModule {
  public image!: string;
  public title!: string;
  public address!: string;
  public price!: number;
  public description!: string;
  public hotelRoomsImages!: HotelRoomsImage[];  
}
