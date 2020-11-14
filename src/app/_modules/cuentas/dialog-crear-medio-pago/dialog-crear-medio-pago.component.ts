import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoCuenta, TipoMedioPago } from '../cuentas.models';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-dialog-crear-medio-pago',
  templateUrl: './dialog-crear-medio-pago.component.html',
  styleUrls: ['./dialog-crear-medio-pago.component.scss']
})
export class DialogCrearMedioPagoComponent implements OnInit {

  listaTipoMediosPago: Array<TipoMedioPago> = []

  constructor(public dialogRef: MatDialogRef<DialogCrearMedioPagoComponent>, private cuentasApiClient: CuentasApiClientService, 
    @Inject(MAT_DIALOG_DATA) public data: DialogCrearMedioPagoData) { }

  ngOnInit(): void {
    this.listaTipoMediosPago = this.data.tipoCuenta.tiposMedioPago;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogCrearMedioPagoData {
  tipoCuenta: TipoCuenta;
  nombre?: string;
  tipoMedioPagoId?: string;
}