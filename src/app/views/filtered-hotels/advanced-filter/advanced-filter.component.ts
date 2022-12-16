import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { ActivatedRoute } from '@angular/router';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss'],
})
export class AdvancedFilterComponent implements OnInit {
  cards: any[] = [];
  hotelFilteredArray: Hotel[] = [];

  constructor(
    private filterModalInfo: FilterModalDataComunicationService,
    private baseHttpService: BaseHttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filterModalInfo.advancedFilterEmitter.subscribe((response) => {
      if (response) {
        this.cards = response;
      }
    });
  }
}
