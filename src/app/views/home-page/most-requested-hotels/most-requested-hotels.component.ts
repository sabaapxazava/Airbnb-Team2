import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { environment } from 'src/environments/environment';
import { CategoryService } from 'src/app/shared/shared-services/category.service';

@Component({
  selector: 'app-most-requested-hotels',
  templateUrl: './most-requested-hotels.component.html',
  styleUrls: ['./most-requested-hotels.component.scss'],
})
export class MostRequestedHotelsComponent implements OnInit {
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
