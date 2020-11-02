import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { Credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthApiClientService {

  private readonly pathBase = environment.api.services_url.auth_service;

  private readonly clientId = environment.api.api_client;
  private readonly clientSecret = environment.api.api_secret;

  constructor(private apiClient: ApiClientService) { }

  login(email: string, password: string): Promise<Credentials> {
    var formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', email);
    formData.append('password', password);

    var map = new Map<string, string>();
    map.set("Authorization", `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`);

    return this.apiClient.doPostFormData(`${this.pathBase}/oauth/token`, formData, map);
  }

  refreshToken(refreshToken: string): Promise<Credentials> {
    var formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', refreshToken);

    var map = new Map<string, string>();
    map.set("Authorization", `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`);

    return this.apiClient.doPostFormData(`${this.pathBase}/oauth/token`, formData, map);
  }
}
