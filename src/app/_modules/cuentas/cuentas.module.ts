import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentasMainComponent } from './cuentas-main/cuentas-main.component';
import { MatListModule } from '@angular/material/list';


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
