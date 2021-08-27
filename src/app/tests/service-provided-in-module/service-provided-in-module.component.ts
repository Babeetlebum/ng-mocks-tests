import { Component } from '@angular/core';
import { ProvidedInModuleService } from './provided-in-module.service';

@Component({
  selector: 'app-service-provided-in-module',
  templateUrl: './service-provided-in-module.component.html',
  styleUrls: ['./service-provided-in-module.component.scss'],
})
export class ServiceProvidedInModuleComponent {
  constructor(public providedService: ProvidedInModuleService) {}
}
