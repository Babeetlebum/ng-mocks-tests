import { Component } from '@angular/core';
import { ProvidedInRootService } from './provided-in-root.service';

@Component({
  selector: 'app-service-provided-in-root',
  templateUrl: './service-provided-in-root.component.html',
  styleUrls: ['./service-provided-in-root.component.scss'],
})
export class ServiceProvidedInRootComponent {
  constructor(public providedService: ProvidedInRootService) {}
}
