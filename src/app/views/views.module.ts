import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MostRequestedHotelsComponent } from './home-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './home-page/most-requested-regions/most-requested-regions.component';
import { FilteredHotelsComponent } from './filtered-hotels/filtered-hotels.component';
import { SharedModule } from '../shared/shared.module';
import { InnerHotelPgComponent } from './inner-hotel-pg/inner-hotel-pg.component';

const shared: any = [
  CommonModule,
  HomePageComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
  FilteredHotelsComponent,
  InnerHotelPgComponent
];

@NgModule({
  declarations: [
    HomePageComponent,
    MostRequestedHotelsComponent,
    MostRequestedRegionsComponent,
    FilteredHotelsComponent,
    InnerHotelPgComponent,
  ],
  imports: [SharedModule],
  exports: [[...shared]],
})
export class ViewsModule {}
