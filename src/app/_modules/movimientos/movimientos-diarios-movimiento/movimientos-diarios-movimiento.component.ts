import { Component, Input, OnInit } from '@angular/core';
import { MovimientoResponse, TipoMovimiento } from '../../core/models/movimientos.models';

@Component({
  selector: 'app-movimientos-diarios-movimiento',
  templateUrl: './movimientos-diarios-movimiento.component.html',
  styleUrls: ['./movimientos-diarios-movimiento.component.scss']
})
export class MovimientosDiariosMovimientoComponent implements OnInit {

  @Input()
  movimiento: MovimientoResponse;

  constructor() { }

  ngOnInit(): void {
  }

  get cantidad(): number {
    if (this.isGasto) {
      return this.movimiento.cantidad * -1;
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
}
