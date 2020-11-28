import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_modules/auth/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { MainComponent } from './main/main.component';
import { CuentasMainComponent } from './_modules/cuentas/cuentas-main/cuentas-main.component';
import { AjustesGlobalesComponent } from './ajustes-globales/ajustes-globales.component';
import { CategoriasMainComponent } from './_modules/categorias/categorias-main/categorias-main.component';
import { AjustesMainComponent } from './ajustes-main/ajustes-main.component';
import { MovimientosMainComponent } from './_modules/movimientos/movimientos-main/movimientos-main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/app", pathMatch: "full" },
  {
    path: 'app', component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: CuentasMainComponent },
      { path: 'cuentas', component: CuentasMainComponent },
      { path: 'movimientos', component: MovimientosMainComponent },
      {
        path: 'ajustes', component: AjustesMainComponent,
        children: [
          { path: '', component: AjustesGlobalesComponent },
          { path: 'categorias', component: CategoriasMainComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
