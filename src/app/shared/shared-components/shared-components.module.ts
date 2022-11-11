import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/core/material/material.module';

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
    MaterialModule
  ],
  exports:[
    [...shared]
  ]
})
export class SharedComponentsModule { }
