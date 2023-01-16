import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MostRequestedHotelsComponent } from './home-page/most-requested-hotels/most-requested-hotels.component';
import { MostRequestedRegionsComponent } from './home-page/most-requested-regions/most-requested-regions.component';
import { SharedModule } from '../shared/shared.module';
import { InnerHotelPgComponent } from './inner-hotel-pg/inner-hotel-pg.component';
import { MatTableModule } from '@angular/material/table';
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
import { TripComponent } from './trip/trip.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelDescriptionComponent } from './inner-hotel-pg/hotel-information/hotel-description/hotel-description.component';
import { HotelNameComponent } from './inner-hotel-pg/hotel-information/hotel-name/hotel-name.component';
import { HotelAddressComponent } from './inner-hotel-pg/hotel-information/hotel-address/hotel-address.component';
import { HotelRoomsComponent } from './inner-hotel-pg/hotel-information/hotel-rooms/hotel-rooms.component';
import { HotelMapComponent } from './inner-hotel-pg/hotel-information/hotel-map/hotel-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './profile/payment/payment.component';
import { HostInformationComponent } from './inner-hotel-pg/hotel-information/host-information/host-information.component';
import { UserInfoUpdateFormComponent } from './profile/user-info-update-form/user-info-update-form.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const shared: any = [
  CommonModule,
  HomePageComponent,
  MostRequestedHotelsComponent,
  MostRequestedRegionsComponent,
  TripComponent,
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
  MatTableModule,
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
    TripComponent,
    ReservationComponent,
    HotelDescriptionComponent,
    HotelNameComponent,
    HotelAddressComponent,
    HotelRoomsComponent,
    HotelMapComponent,
    ProfileComponent,
    PaymentComponent,
    HostInformationComponent,
    UserInfoUpdateFormComponent,
    NotFoundPageComponent,

  ],
  imports: [SharedModule, [...matShared], RouterModule, GoogleMapsModule],
  exports: [[...shared]],
})
export class ViewsModule {}
