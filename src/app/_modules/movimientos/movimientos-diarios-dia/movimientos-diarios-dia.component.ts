import { Component, Input, OnInit } from '@angular/core';
import { DIA_SEMANA, MovimientoResponse, TipoMovimiento } from '../../core/models/movimientos.models';

@Component({
  selector: 'app-movimientos-diarios-dia',
  templateUrl: './movimientos-diarios-dia.component.html',
  styleUrls: ['./movimientos-diarios-dia.component.scss']
})
export class MovimientosDiariosDiaComponent implements OnInit {

  @Input()
  date: Date;
  @Input()
  dia: number;
  @Input()
  movimientos: Array<MovimientoResponse>;

  constructor() { }

  ngOnInit(): void {
  }

  get ingresos(): number {
    var ingresos = 0;
    this.movimientos.forEach(m => {
      const tipoMovimiento = TipoMovimiento[m.tipoMovimientoId];
      if (tipoMovimiento == TipoMovimiento.INGRESO) {
        ingresos += m.cantidad;
      }
    })
    return ingresos;
  }

  get gastos(): number {
    var gastos = 0;
    this.movimientos.forEach(m => {
      const tipoMovimiento = TipoMovimiento[m.tipoMovimientoId];
      if (tipoMovimiento == TipoMovimiento.GASTO) {
        gastos += (m.cantidad * -1);
      }
    })
    return gastos;
  }

  get mes(): string {
    return `${this.date.getMonth()+1}.${this.date.getFullYear()}`;
  }

  get semana(): string {
    const aux = new Date(this.date.getFullYear(), this.date.getMonth(), this.dia);
    return `${DIA_SEMANA[aux.getDay()-1].substr(0,3)}`;
  }
}
