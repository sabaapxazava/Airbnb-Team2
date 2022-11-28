import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MostRequestedHotelsComponent } from './home-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './home-page/most-requested-regions/most-requested-regions.component';
import { FilteredHotelsComponent } from './filtered-hotels/filtered-hotels.component';
import { SharedModule } from '../shared/shared.module';
import { InnerHotelPgComponent } from './inner-hotel-pg/inner-hotel-pg.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgImageSliderModule } from 'ng-image-slider';
import { DatePickerComponent } from './inner-hotel-pg/date-picker/date-picker.component';

const shared: any = [
  CommonModule,
  HomePageComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
  FilteredHotelsComponent,
  InnerHotelPgComponent,
  DatePickerComponent
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
    FilteredHotelsComponent,
    InnerHotelPgComponent,
    DatePickerComponent
  ],
  imports: [SharedModule, [...matShared]],
  exports: [[...shared]],
})
export class ViewsModule {}
