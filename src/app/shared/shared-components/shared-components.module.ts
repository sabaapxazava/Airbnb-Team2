import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { MaterialModule } from 'src/app/core/material/material.module';
import { FilterComponent } from './filter/filter.component';
import { FilterButtonsSliderComponent } from './filter/filter-buttons-slider/filter-buttons-slider.component';
import { FilterModalComponent } from './filter/filter-modal/filter-modal.component';
import { AmenitiesComponent } from './filter/filter-modal/amenities/amenities.component';
import { HostLanguageComponent } from './filter/filter-modal/host-language/host-language.component';
import { PriceRangeComponent } from './filter/filter-modal/price-range/price-range.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PropertyTypeComponent } from './filter/filter-modal/property-type/property-type.component';
import { RoomsAndBedsComponent } from './filter/filter-modal/rooms-and-beds/rooms-and-beds.component';
import { TypeOfPlaceComponent } from './filter/filter-modal/type-of-place/type-of-place.component';
import { FilterHeaderComponent } from './filter/filter-modal/filter-header/filter-header.component';
import { FilterFooterComponent } from './filter/filter-modal/filter-footer/filter-footer.component';

const shared: any = [
  CommonModule,
  CardComponent,
  FilterHeaderComponent,
  FilterFooterComponent,
  FilterComponent,
  FilterButtonsSliderComponent,
  FilterModalComponent,
];

@NgModule({
  declarations: [
    CardComponent,

    FilterComponent,
    FilterButtonsSliderComponent,
    FilterModalComponent,
    FilterComponent,
    AmenitiesComponent,
    HostLanguageComponent,
    PriceRangeComponent,
    PropertyTypeComponent,
    RoomsAndBedsComponent,
    TypeOfPlaceComponent,
    FilterHeaderComponent,
    FilterFooterComponent,
  ],
  imports: [MaterialModule, FormsModule, NgxSliderModule],
  exports: [[...shared]],
})
export class SharedComponentsModule {}
