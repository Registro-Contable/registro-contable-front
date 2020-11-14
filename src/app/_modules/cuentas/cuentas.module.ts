import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BalanceTotalComponent } from './balance-total/balance-total.component';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentasMainComponent } from './cuentas-main/cuentas-main.component';
import { CuentasToolbarComponent } from './cuentas-toolbar/cuentas-toolbar.component';
import { DialogCrearCuentaComponent } from './dialog-crear-cuenta/dialog-crear-cuenta.component';
import { DialogNombreCuentaComponent } from './dialog-nombre-cuenta/dialog-nombre-cuenta.component';
import { GrupoCuentasComponent } from './grupo-cuentas/grupo-cuentas.component';
import { MedioPagoComponent } from './medio-pago/medio-pago.component';
import { DialogCrearMedioPagoComponent } from './dialog-crear-medio-pago/dialog-crear-medio-pago.component';





@NgModule({
  declarations: [CuentasMainComponent, CuentaItemComponent, BalanceTotalComponent, GrupoCuentasComponent, DialogNombreCuentaComponent, CuentasToolbarComponent, DialogCrearCuentaComponent, MedioPagoComponent, DialogCrearMedioPagoComponent],
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
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    CuentasMainComponent,
  ]
})
export class CuentasModule { }
