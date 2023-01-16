import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-rooms-and-beds',
  templateUrl: './rooms-and-beds.component.html',
  styleUrls: ['./rooms-and-beds.component.css'],
})
export class RoomsAndBedsComponent implements OnInit {
  RoomsCount: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  BedsPerRoomCount: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  BathRoomsCount: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  bedroomIsChecked!: any;

  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}

  onChangeBedrooms(e: any) {
    this.filterModalInfo.filterModalInfo.RoomsCount = e.target.value;
  }
  onChangeBeds(e: any) {
    this.filterModalInfo.filterModalInfo.BedsPerRoomCount = e.target.value;
  }
  onChangeBathrooms(e: any) {
    this.filterModalInfo.filterModalInfo.BathRoomsCount = e.target.value;
  }
}
