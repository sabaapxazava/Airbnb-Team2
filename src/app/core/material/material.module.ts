import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatDatepickerModule,
  NgImageSliderModule,
  MatFormFieldModule,
  MatNativeDateModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
