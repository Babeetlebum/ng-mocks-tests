import { ServiceProvidedInModuleComponent } from './service-provided-in-module.component';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
} from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { ProvidedInModuleService } from './provided-in-module.service';
import { ServiceProvidedInModuleModule } from './service-provided-in-module.module';

describe('ServiceProvidedInModuleComponent', () => {
  let component: ServiceProvidedInModuleComponent;
  let fixture: MockedComponentFixture<ServiceProvidedInModuleComponent>;

  describe(`with mocked service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(
        ServiceProvidedInModuleComponent,
        ServiceProvidedInModuleModule
      )
        .mock(AppModule)
        .mock(ProvidedInModuleService, { isMockedService: () => true })
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInModuleComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`without mocked service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(
        ServiceProvidedInModuleComponent,
        ServiceProvidedInModuleModule
      ).mock(AppModule)
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInModuleComponent);
        component = fixture.point.componentInstance;
      });

      it('should be auto-mocked to undefined', () => {
        expect(component.providedService.isMockedService()).toBeUndefined();
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInModuleService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInModuleComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`when keeping original service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(
        ServiceProvidedInModuleComponent,
        ServiceProvidedInModuleModule
      )
        .mock(AppModule)
        .keep(ServiceProvidedInModuleComponent)
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInModuleComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the original service', () => {
        expect(component.providedService.isMockedService()).toBe(false);
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInModuleService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInModuleComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });
});
