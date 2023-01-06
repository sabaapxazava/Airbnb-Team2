import { Component, Input, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { CategoryService } from 'src/app/shared/shared-services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-most-requested-regions',
  templateUrl: './most-requested-regions.component.html',
  styleUrls: ['./most-requested-regions.component.scss'],
})
export class MostRequestedRegionsComponent implements OnInit {
  cards: any[] = [];
  hotelFilteredArray: Hotel[] = [];
  hotelItem!: any;

  constructor(
    private baseHttpService: BaseHttpService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const fullApiUrl = `${environment.baseApiUrl}/Hotel`;
    this.baseHttpService.getAll<Hotel>(fullApiUrl).subscribe((res: any) => {
      this.cards = res;
      this.hotelFilteredArray = this.cards;
      console.log(this.cards);
    });
    this.categoryService.categoryItemEmitter.subscribe((response) => {
      this.hotelItem = response;
    });
  }
}
