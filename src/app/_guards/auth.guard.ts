import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_modules/auth/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log(this.auth.isAuth);
      if (!this.auth.isAuth) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      }
      return resolve(this.auth.isAuth);
    });
  }

}
