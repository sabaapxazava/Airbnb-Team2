import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgImageSliderModule } from 'ng-image-slider';

const materialModules = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatDatepickerModule,
  NgImageSliderModule
];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
