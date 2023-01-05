import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { CategoryService } from 'src/app/shared/shared-services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss'],
})
export class AdvancedFilterComponent implements OnInit {
  cards: any[] = [];
  hotelFilteredArray: Hotel[] = [];
  queryString!: string;

  constructor(
    private categoryService: CategoryService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.objToString();
  }

  objToString() {
    this.activatedRoute.queryParams.subscribe(async (response: any) => {
      let TmpqueryString = Object.keys(response)
        .filter((key: any) => Number(response[key]) != 0)
        .map((key: any) => key + '=' + response[key])
        .join('&');

      this.sendFilterdHotels(TmpqueryString);
      console.log(response);
    });
  }

  sendFilterdHotels(queryString: string) {
    this.categoryService
      .getFilteredCategoris(`?${queryString}`)
      .subscribe((response) => {
        this.cards = response;
      });
  }
}
