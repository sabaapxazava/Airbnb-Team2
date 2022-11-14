import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './shared-components/shared-components.module';

const shared: any = [CommonModule, SharedComponentsModule];

@NgModule({
  declarations: [],
  imports: [[...shared]],
  exports: [[...shared]],
})
export class SharedModule {}
