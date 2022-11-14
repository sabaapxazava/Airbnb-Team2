import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FilterComponent } from './main-page/filter/filter.component';
import { MostRequestedHotelsComponent } from './main-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './main-page/most-requested-regions/most-requested-regions.component';
import { SharedModule } from '../shared/shared.module';

const shared: any = [
  CommonModule,
  MainPageComponent,
  FilterComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
];

@NgModule({
  declarations: [
    MainPageComponent,
    FilterComponent,
    MostRequestedHotelsComponent,
    MostRequestedRegionsComponent,
  ],
  imports: [SharedModule],
  exports: [[...shared]],
})
export class MainPageModule {}
