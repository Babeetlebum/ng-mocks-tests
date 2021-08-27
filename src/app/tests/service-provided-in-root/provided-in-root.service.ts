import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProvidedInRootService {
  isMockedService() {
    console.log(`ProvidedInRootService - original service called`);
    return false;
  }
}
