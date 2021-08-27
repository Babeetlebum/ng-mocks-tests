import { NgModule } from '@angular/core';
import { ServiceProvidedInModuleComponent } from './service-provided-in-module.component';
import { ProvidedInModuleService } from './provided-in-module.service';

@NgModule({
  declarations: [ServiceProvidedInModuleComponent],
  providers: [ProvidedInModuleService],
})
export class ServiceProvidedInModuleModule {}
