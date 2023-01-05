import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-rooms-and-beds',
  templateUrl: './rooms-and-beds.component.html',
  styleUrls: ['./rooms-and-beds.component.css'],
})
export class RoomsAndBedsComponent implements OnInit {
  bedrooms: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  beds: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bathrooms: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bedroomIsChecked!: any;

  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}

  onChangeBedrooms(e: any) {
    this.filterModalInfo.filterModalInfo.roomsAndBeds.bedrooms = e.target.value
  }
  onChangeBeds(e: any) {
    this.filterModalInfo.filterModalInfo.roomsAndBeds.beds = e.target.value
  }
  onChangeBathrooms(e: any) {
    this.filterModalInfo.filterModalInfo.roomsAndBeds.bathrooms = e.target.value
  }
}
