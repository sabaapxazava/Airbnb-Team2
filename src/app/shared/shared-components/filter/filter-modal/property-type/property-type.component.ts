import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css'],
})
export class PropertyTypeComponent implements OnInit {
  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}

  propertyOfType = new FormGroup({
    house: new FormControl(''),
    apartament: new FormControl(''),
    guesthouse: new FormControl(''),
    hotel: new FormControl(''),
  });
  onChangeHouse(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType = e.target.value
    } else {
      this.filterModalInfo.filterModalInfo.propertyOfType = "0"
    }
  }
  onChangeApartament(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType = e.target.value
    } else {
      this.filterModalInfo.filterModalInfo.propertyOfType = "0"
    }
    
  }
  onChangeGuesthouse(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType = e.target.value
    } else {
      this.filterModalInfo.filterModalInfo.propertyOfType = "0"
    }
  }
  onChangeHotel(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.propertyOfType = e.target.value
    } else {
      this.filterModalInfo.filterModalInfo.propertyOfType = "0"
    }
  }
}
