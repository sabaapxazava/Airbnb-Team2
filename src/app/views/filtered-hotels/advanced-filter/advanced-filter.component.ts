import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
} from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { CategoryService } from 'src/app/shared/shared-services/category.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss'],
})
export class AdvancedFilterComponent
  implements OnInit, OnChanges, AfterContentChecked
{
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

  ngOnChanges(): void {}
  ngAfterViewInit(): void {}
  ngAfterViewChecked() {}
  ngAfterContentChecked() {}
  ngDoCheck() {}

  objToString() {
    this.activatedRoute.queryParams.subscribe(async (response) => {
      let TmpqueryString = Object.keys(response)
        .map((key) => key + '=' + response[key])
        .join('&');
      console.log('querystring', this.queryString);
      this.sendFilterdHotels(TmpqueryString);
    });
  }

  sendFilterdHotels(queryString:string) {
    this.categoryService
      .getFilteredCategoris(`?${queryString}`)
      .subscribe((response) => {
        // console.log('response axali', response);
        this.cards = response;
      });
  }
}
