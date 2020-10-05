import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentasMainComponent } from './cuentas-main/cuentas-main.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { BalanceTotalComponent } from './balance-total/balance-total.component';
import { GrupoCuentasComponent } from './grupo-cuentas/grupo-cuentas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogNombreCuentaComponent } from './dialog-nombre-cuenta/dialog-nombre-cuenta.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CuentasToolbarComponent } from './cuentas-toolbar/cuentas-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DialogCrearCuentaComponent } from './dialog-crear-cuenta/dialog-crear-cuenta.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [CuentasMainComponent, CuentaItemComponent, BalanceTotalComponent, GrupoCuentasComponent, DialogNombreCuentaComponent, CuentasToolbarComponent, DialogCrearCuentaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    CuentasMainComponent,
  ]
})
export class CuentasModule { }
