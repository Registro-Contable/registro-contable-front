import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoCuenta } from '../cuentas.models';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-dialog-crear-cuenta',
  templateUrl: './dialog-crear-cuenta.component.html',
  styleUrls: ['./dialog-crear-cuenta.component.scss']
})
export class DialogCrearCuentaComponent implements OnInit {

  listaTipoCuentas: Array<TipoCuenta> = []
  data: DialogCrearCuentaData = {
    tipoCuentaId: "",
    nombre: ""
  }

  constructor(
    public dialogRef: MatDialogRef<DialogCrearCuentaComponent>, private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
    this.cuentasApiClient.listaTipoCuentas()
      .then(lista => this.listaTipoCuentas = lista)
      .catch(err => {
        console.log(err);
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogCrearCuentaData {
  nombre?: string;
  tipoCuentaId?: string;
}