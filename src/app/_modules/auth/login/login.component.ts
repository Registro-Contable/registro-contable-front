import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthApiClientService } from '../_services/auth-api-client.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faLock = faLock;

  private returnUrl;

  loginForm = new FormGroup({
    fcUsuario: new FormControl(''),
    fcPassword: new FormControl(''),
  });

  errorMsg: string;

  constructor(private auth: AuthService, private authApiClient: AuthApiClientService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }

  ngOnInit(): void {
    if (this.auth.isAuth) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    const usuario = this.loginForm.get('fcUsuario').value;
    const pass = this.loginForm.get('fcPassword').value;

    this.authApiClient.login(usuario, pass).then(credentials => {
      this.auth.credentials = credentials;
      if (this.returnUrl) {
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate(['/']);
      }
    }).catch(err => {
      console.log(err);
      this.errorMsg = err.error.error_description;
    });
  }

}
