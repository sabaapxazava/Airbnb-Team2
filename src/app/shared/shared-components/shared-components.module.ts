import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FilterComponent } from './filter/filter.component';
import { FilterButtonsSliderComponent } from './filter/filter-buttons-slider/filter-buttons-slider.component';
import { FilterModalComponent } from './filter/filter-modal/filter-modal.component';

const shared: any = [
  CommonModule,
  CardComponent,
  HeaderComponent,
  FooterComponent,
  FilterComponent,
  FilterButtonsSliderComponent,
  FilterModalComponent,
];

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    FilterButtonsSliderComponent,
    FilterModalComponent,
    FilterComponent,
  ],
  imports: [MaterialModule],
  exports: [[...shared]],
})
export class SharedComponentsModule {}
