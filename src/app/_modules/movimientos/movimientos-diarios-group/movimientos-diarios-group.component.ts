import { Component, OnInit } from '@angular/core';
import { MovimientoResponse, TipoMovimiento } from '../movimientos.models';
import { MovimientosApiClientService } from '../_service/movimientos-api-client.service';

@Component({
  selector: 'app-movimientos-diarios-group',
  templateUrl: './movimientos-diarios-group.component.html',
  styleUrls: ['./movimientos-diarios-group.component.scss']
})
export class MovimientosDiariosGroupComponent implements OnInit {

  dateSelected: Date;
  movimientosDia: Map<Number, Array<MovimientoResponse>>;
  ingresos: number;
  gastos: number;

  constructor(private movimientosApiClient: MovimientosApiClientService) { }

  ngOnInit(): void {
    this.movimientosDia = new Map();
    this.dateSelected = new Date();
    this.ingresos = 0;
    this.gastos = 0;
    this.cargarMovimientos();
  }

  cambioMes(date) {
    this.dateSelected = date;
    this.cargarMovimientos();
  }

  private cargarMovimientos() {
    const firstDay = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth(), 1);
    const lastDay = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth() + 1, 0);
    this.movimientosApiClient.listaMovimientos({
      fromDate: firstDay,
      toDate: lastDay
    })
      .then(list => this.tratarMovimientosResponse(list))
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  private tratarMovimientosResponse(movimientos: Array<MovimientoResponse>) {
    this.ingresos = 0;
    this.gastos = 0;

    console.log(movimientos);

    movimientos.forEach(m => {
      var date = new Date(m.fecha);
      var day = date.getDate();
      var dia: Array<MovimientoResponse> = this.movimientosDia[day];
      if (!dia) {
        dia = new Array();
      }
      dia.push(m);
      this.movimientosDia[day] = dia;

      const tipoMovimiento = TipoMovimiento[m.tipoMovimientoId];
      console.log(tipoMovimiento);
      if (tipoMovimiento == TipoMovimiento.INGRESO) {
        this.ingresos += m.cantidad;
      } else if (tipoMovimiento == TipoMovimiento.GASTO) {
        this.gastos += (m.cantidad*-1);
      }
    });
  }

}
