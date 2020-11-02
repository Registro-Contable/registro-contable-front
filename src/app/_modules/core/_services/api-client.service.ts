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

  constructor(private httpClient: HttpClient) {
  }

  public doGet(path: string): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.get(url).toPromise();
  }

  public doGetString(path: string): Promise<string> {
    const url = `${this.backUrl}${path}`;
    var obs: Observable<string> = this.httpClient.get(url, { responseType: 'text' });
    return obs.toPromise();
  }

  public doDelete(path: string): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.delete(url).toPromise();
  }

  public doPost(path: string, body: any, customHeaders?: Map<string, string>): Promise<any> {
    const url = `${this.backUrl}${path}`;
    var headers = new HttpHeaders();
    customHeaders?.forEach((v, k) => {
      headers = headers.append(k, v);
    });
    return this.httpClient.post(url, body, { headers: headers }).toPromise();
  }

  public doPostFormData(path: string, body: FormData, customHeaders?: Map<string, string>): Promise<any> {
    const url = `${this.backUrl}${path}`;
    var headers = new HttpHeaders();
    customHeaders?.forEach((v, k) => {
      headers = headers.append(k, v);
    });
    headers.append('Content-Type', undefined)
    return this.httpClient.post(url, body, { headers: headers }).toPromise();
  }

  public doPut(path: string, body: any): Promise<any> {
    const url = `${this.backUrl}${path}`;
    return this.httpClient.put(url, body).toPromise();
  }

}
