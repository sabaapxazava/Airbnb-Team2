import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { FilteredHotelsComponent } from './views/filtered-hotels/filtered-hotels.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { InnerHotelPgComponent } from './views/inner-hotel-pg/inner-hotel-pg.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ReservationComponent } from './views/reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'filtered-hotels/:name',
    component: FilteredHotelsComponent,
  },
  {
    path: 'hotel/:id',
    component: InnerHotelPgComponent,
    canActivate: [],
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
