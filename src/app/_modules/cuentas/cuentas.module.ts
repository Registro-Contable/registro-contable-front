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

@NgModule({
  declarations: [CuentasMainComponent, CuentaItemComponent, BalanceTotalComponent, GrupoCuentasComponent, DialogNombreCuentaComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    CuentasMainComponent,
  ]
})
export class CuentasModule { }
