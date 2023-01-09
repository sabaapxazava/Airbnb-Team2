import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { LoadingService } from '../shared-services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.handle(request.url, true);
    return next
      .handle(request)
      .pipe(
        catchError((error: any) => {
          this.loader.handle(request.url, false);
          return error;
        })
      )
      .pipe(
        map((evt: any) => {
          if (evt instanceof HttpResponse) {
            this.loader.handle(evt.url ?? '', false);
          }
          return evt;
        })
      );
  }
}
