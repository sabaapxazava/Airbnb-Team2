import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './shared-components/shared-components.module';

const shared: any = [SharedComponentsModule];

@NgModule({
  declarations: [],
  imports: [[...shared]],
  exports: [[...shared]],
})
export class SharedModule {}
