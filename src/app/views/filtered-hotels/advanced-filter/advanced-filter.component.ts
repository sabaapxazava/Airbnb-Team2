import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { CategoryService } from 'src/app/shared/shared-services/category.service';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss'],
})
export class AdvancedFilterComponent implements OnInit {
  cards: any[] = [];
  hotelFilteredArray: Hotel[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.hotalsArraySubscriber();
  }

  ngAfterViewInit() {
    this.hotalsArraySubscriber();
  }

  hotalsArraySubscriber() {
    this.categoryService.categoryItemEmitter.subscribe((response) => {
      if (response) {
        this.cards = response;
        console.log('receved hotels', this.cards);
      }
    });
  }
}
