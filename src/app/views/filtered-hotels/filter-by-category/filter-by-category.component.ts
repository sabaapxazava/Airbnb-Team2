import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { CategoryService } from 'src/app/shared/shared-services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.scss'],
})
export class FilterByCategoryComponent implements OnInit {
  cards: any[] = [];
  hotelFilteredArray: Hotel[] = [];
  categoryItem!: any;

  constructor(
    private baseHttpService: BaseHttpService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const fullApiUrl = `${environment.baseApiUrl}/Hotel`;
    this.baseHttpService.getAll<Hotel>(fullApiUrl).subscribe((res: any) => {
      this.cards = res;
      this.filterByIcon();
    });
    this.activatedRoute.queryParams.subscribe((response) => {
      if (response) {
        this.categoryItem = response;
        this.filterByIcon();
      }
    });
    this.categoryService.categoryItemEmitter.subscribe(() => {
      this.filterByIcon();
    });
  }
  filterByIcon(): any {
    this.hotelFilteredArray = [];
    this.cards.forEach((item) => {
      item.categories.forEach((item2: any) => {
        if (item2.name == this.categoryItem['name']) {
          return this.hotelFilteredArray.push(item);
        } else return;
      });
    });
  }
}
