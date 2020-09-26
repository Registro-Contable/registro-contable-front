import { Injectable } from '@angular/core';
import { Credentials } from '../credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public credentials: Credentials = null;

  constructor() { }

  public get isAuth(): boolean {
    return this.credentials?.access_token != null;
  }

}
