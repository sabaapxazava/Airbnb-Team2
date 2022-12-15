import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MostRequestedHotelsComponent } from './home-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './home-page/most-requested-regions/most-requested-regions.component';
import { FilteredHotelsComponent } from './filtered-hotels/filtered-hotels.component';
import { SharedModule } from '../shared/shared.module';
import { InnerHotelPgComponent } from './inner-hotel-pg/inner-hotel-pg.component';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgImageSliderModule } from 'ng-image-slider';
import { HotelInformationComponent } from './inner-hotel-pg/hotel-information/hotel-information.component';
import { HotelReserveComponent } from './inner-hotel-pg/hotel-reserve/hotel-reserve.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

const shared: any = [
  CommonModule,
  HomePageComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
  ProfileComponent,
  FilteredHotelsComponent,
  InnerHotelPgComponent,
  HttpClientModule,
];

const matShared: any = [
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  MatButtonModule,
  NgImageSliderModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    HomePageComponent,
    MostRequestedHotelsComponent,
    MostRequestedRegionsComponent,
    FilteredHotelsComponent,
    InnerHotelPgComponent,
    HotelInformationComponent,
    HotelReserveComponent,
    ProfileComponent,
  ],
  imports: [SharedModule, [...matShared]],
  exports: [[...shared]],
})
export class ViewsModule {}
