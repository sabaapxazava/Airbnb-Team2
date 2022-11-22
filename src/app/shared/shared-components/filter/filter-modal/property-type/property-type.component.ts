import { Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css'],
})
export class PropertyTypeComponent implements OnInit {
  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}
  onChangeHouse(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.propertyOfType.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.propertyOfType.splice(index, 1);
    }
  }
  onChangeApartament(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType.push(e.target.value);
    } else {
      let elIndex = this.filterModalInfo.filterModalInfo.propertyOfType.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.propertyOfType.splice(elIndex, 1);
    }
  }
  onChangeGuesthouse(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType.push(e.target.value);
    } else {
      let elIndex = this.filterModalInfo.filterModalInfo.propertyOfType.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.propertyOfType.splice(elIndex, 1);
    }
  }
  onChangeHotel(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType.push(e.target.value);
    } else {
      let elIndex = this.filterModalInfo.filterModalInfo.propertyOfType.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.propertyOfType.splice(elIndex, 1);
    }
  }
}
