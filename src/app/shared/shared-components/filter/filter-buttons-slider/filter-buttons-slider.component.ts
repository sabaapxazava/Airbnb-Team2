import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/shared-services/category.service';

@Component({
  selector: 'app-filter-buttons-slider',
  templateUrl: './filter-buttons-slider.component.html',
  styleUrls: ['./filter-buttons-slider.component.css'],
})
export class FilterButtonsSliderComponent implements OnInit {
  // filterSliderButtonsList: any = [
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
  //     title: 'OMG!',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
  //     title: 'Design',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
  //     title: 'Tropical',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
  //     title: 'Treehouses',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg',
  //     title: 'Grand pianos',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
  //     title: 'Private rooms',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
  //     title: 'Amazing views',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
  //     title: 'Luxe',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
  //     title: 'Cabins',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
  //     title: 'Mansions',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
  //     title: 'Boats',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
  //     title: 'Tiny homes',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
  //     title: 'Iconic cities',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
  //     title: 'Countryside',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
  //     title: 'Earth homes',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg',
  //     title: 'Domes',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg',
  //     title: 'Towers',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
  //     title: 'A-frames',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
  //     title: 'Historical homes',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg',
  //     title: 'Dammusi',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
  //     title: 'Beach',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg',
  //     title: 'Vineyards',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg',
  //     title: 'Windmills',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
  //     title: 'Iconic cities',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg',
  //     title: 'Trulli',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg',
  //     title: 'Desert',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
  //     title: 'Surfing',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg',
  //     title: 'Chefs kitchens',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
  //     title: 'Skiing',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
  //     title: 'Golfing',
  //   },
  //   {
  //     image:
  //       'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg',
  //     title: 'Campers',
  //   },
  // ];

  filterSliderButtonsList: any[] = [];

  constructor(private categoryService: CategoryService) {}
  sliderIcons!: any;
  isDragStart = false;
  prevPageX!: any;
  prevScrollLeft!: any;
  positionDiff!: any;

  ngOnInit(): void {
    this.sliderIcons = document.querySelector('.slider-icons-wrapper');
    this.readAllCategories();
  }

  readAllCategories() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.filterSliderButtonsList = response;
      console.log(this.filterSliderButtonsList);
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
