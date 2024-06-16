import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { EndPointInterceptor } from './end-point.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EndPointInterceptor, multi: true },
];