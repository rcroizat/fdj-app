import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  protected apiBase = environment.apiUrl;
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const urlWithEnv = req.clone({
      url: this.apiBase + req.url
    });

    return next.handle(urlWithEnv).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          console.log('error', error)
            // Here we can manage our error cases
            //   switch (error.status) {
            //     case 401: {}
            //     case 403: {}
            //     etc.
            // }
        }
        // Returning an empty object, to not block the app
        return of({} as HttpEvent<any>);
      })
    );
}
}
