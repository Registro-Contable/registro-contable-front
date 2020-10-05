import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cuenta, CuentaRequest } from '../cuentas.models';
import { DialogNombreCuentaComponent } from '../dialog-nombre-cuenta/dialog-nombre-cuenta.component';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-cuenta-item',
  templateUrl: './cuenta-item.component.html',
  styleUrls: ['./cuenta-item.component.scss']
})
export class CuentaItemComponent implements OnInit {

  @Input("cuenta")
  cuenta: Cuenta;

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
  }

  openRenombrarDialog(): void {
    const dialogRef = this.dialog.open(DialogNombreCuentaComponent, {
      width: '250px',
      data: { titulo: this.cuenta.nombre, nombre: this.cuenta.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var cuentaAux: CuentaRequest = {
          nombre: result
        };
        this.cuentasApiClient.modificarCuenta(this.cuenta.id, cuentaAux)
          .then(res => this.cuenta = res)
          .catch(err => {
            console.log(err);
            alert(err);
          })
      }
    });
  }

  borrarCuenta(): void {
    var confirm = window.confirm(`¿Seguro que quieres borrar la cuenta ${this.cuenta.nombre}`);
    if(confirm) {
      this.cuentasApiClient.borrarCuenta(this.cuenta.id)
          .then(res => this.refrescar.emit(true))
          .catch(err => {
            console.log(err);
            alert(err);
          })
    }
  }
}
