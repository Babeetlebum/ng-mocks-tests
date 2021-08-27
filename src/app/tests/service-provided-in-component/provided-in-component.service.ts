import { Injectable } from '@angular/core';

@Injectable()
export class ProvidedInComponentService {
  isMockedService() {
    console.log(`ProvidedInComponentService - original service called`);
    return false;
  }
}
