import { Component, Input, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';

@Component({
  selector: 'app-hotel-map',
  templateUrl: './hotel-map.component.html',
  styleUrls: ['./hotel-map.component.scss']
})
export class HotelMapComponent implements OnInit {

  @Input() curentHotel:Hotel = new Hotel;
  constructor() { 
  }

  ngOnInit(): void {
    this.center =  {
        lat: this.curentHotel.latitude,
        lng: this.curentHotel.longitude
    };
    this.markerPositions.push({
      lat: this.curentHotel.latitude,
      lng: this.curentHotel.longitude})
  }
  center: google.maps.LatLngLiteral = {
      lat: 1,
      lng: 1
  };
  display: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 10;
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
}
