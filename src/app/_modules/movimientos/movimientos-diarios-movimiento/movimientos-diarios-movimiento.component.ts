import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovimientoRequest, MovimientoResponse, TipoMovimiento } from '../../core/models/movimientos.models';
import { MovimientosApiClientService } from '../../core/_services/movimientos-api-client.service';
import { DialogCrearMovimientoComponent } from '../dialog-crear-movimiento/dialog-crear-movimiento.component';

@Component({
  selector: 'app-movimientos-diarios-movimiento',
  templateUrl: './movimientos-diarios-movimiento.component.html',
  styleUrls: ['./movimientos-diarios-movimiento.component.scss']
})
export class MovimientosDiariosMovimientoComponent implements OnInit {

  @Input() movimiento: MovimientoResponse;
  @Output() refrescar = new EventEmitter<boolean>();

  constructor(private movimientosApiClient: MovimientosApiClientService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  get cantidad(): number {
    if (this.isGasto) {
      // return this.movimiento.cantidad * -1;
    }
    return this.movimiento.cantidad;
  }

  get tipoMovimiento(): TipoMovimiento {
    return TipoMovimiento[this.movimiento.tipoMovimientoId];
  }

  get isIngreso(): boolean {
    return this.tipoMovimiento == TipoMovimiento.INGRESO;
  }

  get isGasto(): boolean {
    return this.tipoMovimiento == TipoMovimiento.GASTO;
  }

  borrar(): void {
    var confirm = window.confirm("¿Eliminar este movimiento?");
    if (confirm) {
      this.movimientosApiClient.borrarMovimiento(this.movimiento.id)
        .then(_ => {
          this.refrescar.emit(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  openModificarMovimientoDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearMovimientoComponent, {
      data: this.movimiento
    });

    dialogRef.afterClosed().subscribe((result: MovimientoRequest) => {
      if (result) {
        this.movimientosApiClient.modificarMovimiento(this.movimiento.id, result)
          .then(m => {
            this.movimiento = m;
            this.refrescar.emit(true)
          })
          .catch(err => console.log(err));
      }
    });
  }
}
