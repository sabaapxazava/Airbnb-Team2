import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { FilteredHotelsComponent } from './views/filtered-hotels/filtered-hotels.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { InnerHotelPgComponent } from './views/inner-hotel-pg/inner-hotel-pg.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'filtered-hotels',
    component: FilteredHotelsComponent,
  },
  {
    path: 'hotel/:id',
    component: InnerHotelPgComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
