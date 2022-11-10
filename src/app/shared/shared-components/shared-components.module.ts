import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const shared:any = [
  CommonModule,
  CardComponent
]

@NgModule({
  declarations:[
    CardComponent
  ],
  imports: [
  ],
  exports:[
    [...shared]
  ]
})
export class SharedComponentsModule { }
