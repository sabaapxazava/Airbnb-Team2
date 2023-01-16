import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdvancedFilterComponent } from './views/filtered-hotels/advanced-filter/advanced-filter.component';
import { FilterByCategoryComponent } from './views/filtered-hotels/filter-by-category/filter-by-category.component';
import { FilteredHotelsComponent } from './views/filtered-hotels/filtered-hotels.component';

import { HomePageComponent } from './views/home-page/home-page.component';
import { InnerHotelPgComponent } from './views/inner-hotel-pg/inner-hotel-pg.component';
import { TripComponent } from './views/trip/trip.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'filtered-hotels',
    component: FilteredHotelsComponent,
    children: [
      { path: 'category-filter', component: FilterByCategoryComponent },
      { path: 'advanced-filter', component: AdvancedFilterComponent },
    ],
  },
  {
    path: 'hotel/:id',
    component: InnerHotelPgComponent,
  },
  { path: 'trip', component: TripComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [AuthGuard],
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
