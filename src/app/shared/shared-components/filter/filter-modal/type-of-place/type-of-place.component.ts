import { Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-type-of-place',
  templateUrl: './type-of-place.component.html',
  styleUrls: ['./type-of-place.component.css'],
})
export class TypeOfPlaceComponent implements OnInit {
  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}

  onEntryPlace(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.TypeOfPlace.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.TypeOfPlace.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.TypeOfPlace.splice(index, 1);
    }
  }
  onPrivateRoom(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.TypeOfPlace.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.TypeOfPlace.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.TypeOfPlace.splice(index, 1);
    }
  }
  onSharedRoom(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.TypeOfPlace.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.TypeOfPlace.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.TypeOfPlace.splice(index, 1);
    }
  }
}
