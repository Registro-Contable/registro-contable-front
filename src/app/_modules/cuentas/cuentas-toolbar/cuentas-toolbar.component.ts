import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CuentaRequest } from '../../core/models/cuentas.models';
import { CuentasApiClientService } from '../../core/_services/cuentas-api-client.service';
import { DialogCrearCuentaComponent, DialogCrearCuentaData } from '../dialog-crear-cuenta/dialog-crear-cuenta.component';

@Component({
  selector: 'app-cuentas-toolbar',
  templateUrl: './cuentas-toolbar.component.html',
  styleUrls: ['./cuentas-toolbar.component.scss']
})
export class CuentasToolbarComponent implements OnInit {

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
  }

  openAddCuentaDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearCuentaComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: DialogCrearCuentaData) => {
      if (result) {
        var cuentaAux: CuentaRequest = {
          nombre: result.nombre,
          tipoCuentaId: result.tipoCuentaId,
        };
        this.cuentasApiClient.crearCuenta(cuentaAux)
          .then(_ => this.refrescar.emit(true))
          .catch(err => {
            console.log(err);
            alert(err);
          })
      }
    });
  }
}
