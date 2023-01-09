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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountComponent } from './header/account/account.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { PayFormComponent } from './pay-form/pay-form.component';
import { ReservedCardComponent } from './reserved-card/reserved-card.component';
import { ProfileReservedCardComponent } from './profile-reserved-card/profile-reserved-card.component';
import { SaveCreditCardComponent } from './save-credit-card/save-credit-card.component';
import { LoaderComponent } from './loader/loader.component';

const shared: any = [
  CommonModule,
  CardComponent,
  HeaderComponent,
  AccountComponent,
  FooterComponent,
  AmenitiesComponent,
  FilterFooterComponent,
  FilterHeaderComponent,
  HostLanguageComponent,
  PriceRangeComponent,
  PropertyTypeComponent,
  RoomsAndBedsComponent,
  TypeOfPlaceComponent,
  FilterComponent,
  FilterButtonsSliderComponent,
  FilterModalComponent,
  ImageSliderComponent,
  DatePickerComponent,
  PayFormComponent,
  ReservedCardComponent,
  ProfileReservedCardComponent,
  SaveCreditCardComponent,
  LoaderComponent,
];

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    AccountComponent,
    FooterComponent,
    AmenitiesComponent,
    FilterFooterComponent,
    FilterHeaderComponent,
    HostLanguageComponent,
    PriceRangeComponent,
    PropertyTypeComponent,
    RoomsAndBedsComponent,
    TypeOfPlaceComponent,
    FilterComponent,
    FilterButtonsSliderComponent,
    FilterModalComponent,
    ImageSliderComponent,
    DatePickerComponent,
    RegistrationComponent,
    LoginComponent,
    PayFormComponent,
    ReservedCardComponent,
    ProfileReservedCardComponent,
    SaveCreditCardComponent,
    LoaderComponent,
  ],
  imports: [MaterialModule, FormsModule, NgxSliderModule, AppRoutingModule],
  exports: [[...shared]],
})
export class SharedComponentsModule {}
