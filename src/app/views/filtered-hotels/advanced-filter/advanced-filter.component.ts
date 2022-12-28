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
    private filterModalInfo: FilterModalDataComunicationService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.objToString();
    this.sendFilterdHotels(this.queryString);
    // this.filterModalInfo.advancedFilterEmitter.subscribe(() => {
    //   this.sendFilterdHotels();
    // });
  }

  objToString() {
    this.activatedRoute.queryParams.subscribe(async (response: any) => {
      let TmpqueryString = Object.keys(response)
        .map((key) => key + '=' + response[key])
        .join('&');

      this.sendFilterdHotels(TmpqueryString);
      console.log(response);
    });
  }

  sendFilterdHotels(queryString: string) {
    this.categoryService
      .getFilteredCategoris(`?${queryString}`)
      .subscribe((response) => {
        // console.log('response axali', response);
        this.cards = response;
      });
  }
}
