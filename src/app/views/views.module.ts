import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MostRequestedHotelsComponent } from './home-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './home-page/most-requested-regions/most-requested-regions.component';
import { SharedModule } from '../shared/shared.module';
import { InnerHotelPgComponent } from './inner-hotel-pg/inner-hotel-pg.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgImageSliderModule } from 'ng-image-slider';
import { HotelInformationComponent } from './inner-hotel-pg/hotel-information/hotel-information.component';
import { HotelReserveComponent } from './inner-hotel-pg/hotel-reserve/hotel-reserve.component';
import { HttpClientModule } from '@angular/common/http';
import { FilteredHotelsComponent } from './filtered-hotels/filtered-hotels.component';
import { FilterByCategoryComponent } from './filtered-hotels/filter-by-category/filter-by-category.component';
import { AdvancedFilterComponent } from './filtered-hotels/advanced-filter/advanced-filter.component';

const shared: any = [
  CommonModule,
  HomePageComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
  FilteredHotelsComponent,
  FilterByCategoryComponent,
  AdvancedFilterComponent,
  InnerHotelPgComponent,
  HttpClientModule,
  RouterModule,
];

const matShared: any = [
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  MatButtonModule,
  NgImageSliderModule,
];

@NgModule({
  declarations: [
    HomePageComponent,
    MostRequestedHotelsComponent,
    MostRequestedRegionsComponent,
    InnerHotelPgComponent,
    HotelInformationComponent,
    HotelReserveComponent,
    FilteredHotelsComponent,
    FilterByCategoryComponent,
    AdvancedFilterComponent,
  ],
  imports: [SharedModule, [...matShared], RouterModule],
  exports: [[...shared]],
})
export class ViewsModule {}
