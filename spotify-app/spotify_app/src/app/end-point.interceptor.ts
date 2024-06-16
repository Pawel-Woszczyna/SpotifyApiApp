import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';

@Injectable()
export class EndPointInterceptor implements HttpInterceptor {

  private get _token():string{ 
    return localStorage.getItem('token') || 'no token in localStorage'; 
  }

  constructor(private readonly _endPointService:EndpointService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ 
      setHeaders: { Authorization: `Bearer ${this._token}` } 
    }); return next.handle(request); 
  }
}
