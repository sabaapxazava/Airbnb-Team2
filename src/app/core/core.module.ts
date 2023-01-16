import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  ],
  providers: [AngularFireAuth]
})
export class CoreModule { }
