import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';


const shared:any = [
  SharedComponentsModule
]

@NgModule({
  declarations: [],
  imports: [
    [...shared]
  ],
  exports:[
    [...shared]
  ]
})
export class SharedModule { }
