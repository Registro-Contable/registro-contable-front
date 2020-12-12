import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovimientoRequest } from '../../core/models/movimientos.models';
import { MovimientosApiClientService } from '../../core/_services/movimientos-api-client.service';
import { DialogCrearMovimientoComponent } from '../dialog-crear-movimiento/dialog-crear-movimiento.component';

@Component({
  selector: 'app-movimientos-toolbar',
  templateUrl: './movimientos-toolbar.component.html',
  styleUrls: ['./movimientos-toolbar.component.scss']
})
export class MovimientosToolbarComponent implements OnInit {

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private movimientosApiClient: MovimientosApiClientService) { }

  ngOnInit(): void {
  }

  openAddMovimientoDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearMovimientoComponent, {
    });

    dialogRef.afterClosed().subscribe((result: MovimientoRequest) => {
      if (result) {
        this.movimientosApiClient.crearMovimiento(result)
          .then(_ => this.refrescar.emit(true))
          .catch(err => console.log(err));
      }
    });
  }

}
