import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const shared:any = [
  CommonModule,
  CardComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations:[
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports:[
    [...shared]
  ]
})
export class SharedComponentsModule { }
