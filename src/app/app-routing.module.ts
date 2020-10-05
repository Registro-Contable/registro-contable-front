import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_modules/auth/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { MainComponent } from './main/main.component';
import { CuentasMainComponent } from './_modules/cuentas/cuentas-main/cuentas-main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/app", pathMatch: "full" },
  {
    path: 'app', component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: CuentasMainComponent },
      { path: 'cuentas', component: CuentasMainComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
