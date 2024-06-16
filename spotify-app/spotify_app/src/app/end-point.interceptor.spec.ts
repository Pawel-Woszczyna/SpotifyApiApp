import { TestBed } from '@angular/core/testing';

import { EndPointInterceptor } from './end-point.interceptor';

describe('EndPointInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EndPointInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EndPointInterceptor = TestBed.inject(EndPointInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
