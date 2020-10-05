import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cuenta } from '../cuentas.models';
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
        var cuentaAux = this.cuenta;
        cuentaAux.nombre = result;
        this.cuentasApiClient.modificarCuenta(cuentaAux)
          .then(res => this.cuenta = res)
          .catch(err => {
            console.log(err);
            alert(err);
          })
      }
    });
  }

}
