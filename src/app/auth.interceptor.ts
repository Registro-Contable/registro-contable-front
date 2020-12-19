import {
  HttpClient,
  HttpEvent, HttpHandler,

  HttpHeaders,

  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Credentials } from './_modules/auth/credentials';
import { AuthApiClientService } from './_modules/auth/_services/auth-api-client.service';
import { AuthService } from './_modules/auth/_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.credentials?.access_token;

    if (token) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          if (err.error.error === 'invalid_token' && this.authService.credentials?.refresh_token) {
            const formData = new FormData();
            formData.append('grant_type', 'refresh_token');
            formData.append('refresh_token', this.authService.credentials.refresh_token);
            this.authService.credentials = null;

            let headers = new HttpHeaders();
            headers = headers.append('Authorization', `Basic ${btoa(`${environment.api.api_client}:${environment.api.api_secret}`)}`);

            const url = `${environment.api.baseUrl}${environment.api.services_url.auth_service}/oauth/token`;

            return this.httpClient.post(url, formData, { headers }).pipe(
              mergeMap((auth: Credentials) => {
                this.authService.credentials = auth;
                const token = this.authService.credentials?.access_token;
                req = req.clone({
                  setHeaders: {
                    authorization: `Bearer ${token}`
                  }
                });
                return next.handle(req);
              }),
              catchError(error => {
                window.location.reload();
                return throwError(error);
              })
            );
          } else {
            this.authService.credentials = null;
          }
        }
        return throwError(err);
      })
    );
  }
}
