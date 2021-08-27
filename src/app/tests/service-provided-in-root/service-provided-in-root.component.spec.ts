import { ServiceProvidedInRootComponent } from './service-provided-in-root.component';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
} from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { ProvidedInRootService } from './provided-in-root.service';

describe('ServiceProvidedInRootComponent', () => {
  let component: ServiceProvidedInRootComponent;
  let fixture: MockedComponentFixture<ServiceProvidedInRootComponent>;

  describe(`with mocked service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(ServiceProvidedInRootComponent, AppModule).mock(
        ProvidedInRootService,
        { isMockedService: () => true }
      )
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInRootComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`without mocked service in MockBuilder`, () => {
    beforeEach(() => MockBuilder(ServiceProvidedInRootComponent, AppModule));

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInRootComponent);
        component = fixture.point.componentInstance;
      });

      it('should be auto-mocked to undefined', () => {
        expect(component.providedService.isMockedService()).toBeUndefined();
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInRootService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInRootComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`when keeping original service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(ServiceProvidedInRootComponent, AppModule).keep(
        ServiceProvidedInRootComponent
      )
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInRootComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the original service', () => {
        expect(component.providedService.isMockedService()).toBe(false);
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInRootService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInRootComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });
});
