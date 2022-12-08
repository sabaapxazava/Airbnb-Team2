import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/shared-services/category.service';

@Component({
  selector: 'app-filter-buttons-slider',
  templateUrl: './filter-buttons-slider.component.html',
  styleUrls: ['./filter-buttons-slider.component.css'],
})
export class FilterButtonsSliderComponent implements OnInit {
  filterSliderButtonsList: any[] = [];
  sliderIcons!: any;
  isDragStart = false;
  prevPageX!: any;
  prevScrollLeft!: any;
  positionDiff!: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.sliderIcons = document.querySelector('.slider-icons-wrapper');
    this.readAllCategories();
  }

  readAllCategories() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.filterSliderButtonsList = response;
    });
  }

  dragging(event: any) {
    if (!this.isDragStart) return;
    this.sliderIcons.scrollLeft = event.pageX;
    this.positionDiff = event.pageX - this.prevPageX;
    this.sliderIcons.scrollLeft = this.prevScrollLeft - this.positionDiff;
  }
  dragStart(event: any) {
    this.isDragStart = true;
    this.prevPageX = event.pageX;
    this.prevScrollLeft = this.sliderIcons.scrollLeft;
  }
  dragStop() {
    this.isDragStart = false;
  }

  onScrollLeft() {
    this.sliderIcons.scrollLeft -= 500;
  }
  onScrollRight() {
    this.sliderIcons.scrollLeft += 500;
  }
}
