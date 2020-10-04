import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentasMainComponent } from './cuentas-main/cuentas-main.component';


@NgModule({
  declarations: [CuentasMainComponent, CuentaItemComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    CuentasMainComponent,
  ]
})
export class CuentasModule { }
