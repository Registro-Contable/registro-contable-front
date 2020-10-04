import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentasMainComponent } from './cuentas-main/cuentas-main.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { BalanceTotalComponent } from './balance-total/balance-total.component';
import { GrupoCuentasComponent } from './grupo-cuentas/grupo-cuentas.component';




@NgModule({
  declarations: [CuentasMainComponent, CuentaItemComponent, BalanceTotalComponent, GrupoCuentasComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    CuentasMainComponent,
  ]
})
export class CuentasModule { }
