import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './shared-components/shared-components.module';

import { SharedServicesModule } from './shared-services/shared-services.module';

const shared: any = [
  CommonModule,
  SharedComponentsModule,
  SharedServicesModule,
];

@NgModule({
  declarations: [],
  imports: [[...shared]],
  exports: [[...shared]],
})
export class SharedModule {}
