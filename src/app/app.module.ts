import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProvidedInComponentComponent } from './tests/service-provided-in-component/service-provided-in-component.component';
import { ServiceProvidedInModuleModule } from './tests/service-provided-in-module/service-provided-in-module.module';
import { ServiceProvidedInRootComponent } from './tests/service-provided-in-root/service-provided-in-root.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProvidedInComponentComponent,
    ServiceProvidedInRootComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ServiceProvidedInModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
