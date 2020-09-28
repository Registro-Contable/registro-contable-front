import { Injectable } from '@angular/core';
import { Credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _credentials: Credentials = null;

  constructor() {
    this._credentials = JSON.parse(localStorage.getItem('api-token'));
  }

  public get credentials(): Credentials {
    return this._credentials;
  }

  public set credentials(credentials: Credentials) {
    this._credentials = credentials;
    localStorage.setItem('api-token', JSON.stringify(credentials));
  }

  public get isAuth(): boolean {
    return this._credentials?.access_token != null;
  }

}
