import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedioPago, MedioPagoRequest } from '../../core/models/cuentas.models';
import { CuentasApiClientService } from '../../core/_services/cuentas-api-client.service';
import { DialogNombreMedioPagoComponent } from '../dialog-nombre-medio-pago/dialog-nombre-medio-pago.component';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.component.html',
  styleUrls: ['./medio-pago.component.scss']
})
export class MedioPagoComponent implements OnInit {

  @Input()
  medioPago: MedioPago;

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
  }

  openRenombrarDialog(): void {
    const dialogRef = this.dialog.open(DialogNombreMedioPagoComponent, {
      width: '250px',
      data: { nombre: this.medioPago.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const medioPagoAux: MedioPagoRequest = {
          nombre: result
        };
        this.cuentasApiClient.modificarMedioPago(this.medioPago.cuentaId, this.medioPago.id, medioPagoAux)
          .then(res => this.medioPago = res)
          .catch(err => {
            console.log(err);
            alert(err);
          });
      }
    });
  }

  eliminarSubcategoria(): void {
    const confirm = window.confirm('¿Estas seguro de eliminar este medio pago?');
    if (confirm) {
      this.cuentasApiClient.borrarMedioPago(this.medioPago.cuentaId, this.medioPago.id)
        .then(_ => { this.refrescar.emit(true); })
        .catch(err => {
          console.log(err);
          alert('Error en la peticion');
        });
    }
  }
}
