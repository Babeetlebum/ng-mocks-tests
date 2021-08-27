import { ServiceProvidedInComponentComponent } from './service-provided-in-component.component';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
} from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { ProvidedInComponentService } from './provided-in-component.service';

describe('ServiceProvidedInComponentComponent', () => {
  let component: ServiceProvidedInComponentComponent;
  let fixture: MockedComponentFixture<ServiceProvidedInComponentComponent>;

  describe(`with mocked service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(ServiceProvidedInComponentComponent, AppModule).mock(
        ProvidedInComponentService,
        { isMockedService: () => true }
      )
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInComponentComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`without mocked service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(ServiceProvidedInComponentComponent, AppModule)
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInComponentComponent);
        component = fixture.point.componentInstance;
      });

      it('should be auto-mocked to undefined', () => {
        expect(component.providedService.isMockedService()).toBeUndefined();
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInComponentService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInComponentComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });

  describe(`when keeping original service in MockBuilder`, () => {
    beforeEach(() =>
      MockBuilder(ServiceProvidedInComponentComponent, AppModule).keep(
        ServiceProvidedInComponentComponent
      )
    );

    describe(`when NOT mocked`, () => {
      beforeEach(() => {
        fixture = MockRender(ServiceProvidedInComponentComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the original service', () => {
        expect(component.providedService.isMockedService()).toBe(false);
      });
    });

    describe(`when mocked`, () => {
      MockInstance.scope();
      beforeEach(() => {
        MockInstance(ProvidedInComponentService, 'isMockedService', () => true);
        fixture = MockRender(ServiceProvidedInComponentComponent);
        component = fixture.point.componentInstance;
      });

      it('should call the mocked service', () => {
        expect(component.providedService.isMockedService()).toBe(true);
      });
    });
  });
});
