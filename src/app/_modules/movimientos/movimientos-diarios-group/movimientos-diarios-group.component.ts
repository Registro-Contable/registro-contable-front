import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovimientosApiClientService } from '../../core/_services/movimientos-api-client.service';
import { MovimientoResponse, TipoMovimiento } from '../../core/models/movimientos.models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-movimientos-diarios-group',
  templateUrl: './movimientos-diarios-group.component.html',
  styleUrls: ['./movimientos-diarios-group.component.scss']
})
export class MovimientosDiariosGroupComponent implements OnInit, OnDestroy {

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  dateSelected: Date = new Date();
  movimientosDia: Map<Number, Array<MovimientoResponse>> = new Map();
  ingresos: number = 0;
  gastos: number = 0;

  constructor(private movimientosApiClient: MovimientosApiClientService) { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.cargarMovimientos());
    this.cargarMovimientos();
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
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
    this.movimientosDia.clear();

    movimientos.forEach(m => {
      var date = new Date(m.fecha);
      var day = date.getDate();
      var dia: Array<MovimientoResponse> = this.movimientosDia.get(day);
      if (!dia) {
        dia = new Array();
      }
      dia.push(m);
      this.movimientosDia.set(day, dia);

      const tipoMovimiento = TipoMovimiento[m.tipoMovimientoId];
      if (tipoMovimiento == TipoMovimiento.INGRESO) {
        this.ingresos += m.cantidad;
      } else if (tipoMovimiento == TipoMovimiento.GASTO) {
        this.gastos += (m.cantidad * -1);
      }
    });
    console.log(this.movimientosDia);
  }

}
