import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_modules/auth/_services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private readonly backUrl = environment.api.baseUrl;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();

    var accessToken = this.authService.credentials?.access_token;
    if (accessToken) {
      const value = `Bearer ${accessToken}`;
      headers = headers.append('Authorization', value);
    }

    return headers;
  }

  public doGet(path: string): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.get(url, { headers: this.getHeaders() }).toPromise();
  }

  public doGetString(path: string): Promise<string> {
    const url = `${this.backUrl}${path}`;
    var obs: Observable<string> = this.httpClient.get(url, { headers: this.getHeaders(), responseType: 'text' });
    return obs.toPromise();
  }

  public doDelete(path: string): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.delete(url, { headers: this.getHeaders() }).toPromise();
  }

  public doPost(path: string, body: any): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.post(url, body, { headers: this.getHeaders() }).toPromise();
  }

  public doPut(path: string, body: any): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.put(url, body, { headers: this.getHeaders() }).toPromise();
  }
}
