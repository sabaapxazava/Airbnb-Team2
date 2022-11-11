import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

const shared:any = [
  CommonModule,
  MaterialModule
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
export class CoreModule { }
