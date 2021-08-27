import { Injectable } from '@angular/core';

@Injectable()
export class ProvidedInModuleService {
  isMockedService() {
    console.log(`ProvidedInModuleService - original service called`);
    return false;
  }
}
