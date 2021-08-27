import { Component } from '@angular/core';
import { ProvidedInComponentService } from './provided-in-component.service';

@Component({
  selector: 'app-service-provided-in-component',
  templateUrl: './service-provided-in-component.component.html',
  styleUrls: ['./service-provided-in-component.component.scss'],
  providers: [ProvidedInComponentService],
})
export class ServiceProvidedInComponentComponent {
  constructor(public providedService: ProvidedInComponentService) {}
}
