import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cuenta, TipoCuenta } from '../cuentas.models';

@Component({
  selector: 'app-grupo-cuentas',
  templateUrl: './grupo-cuentas.component.html',
  styleUrls: ['./grupo-cuentas.component.scss']
})
export class GrupoCuentasComponent implements OnInit {

  @Input()
  tipoCuenta: TipoCuenta
  @Input()
  listaCuentas: Array<Cuenta>

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  get totalCapital(): number {
    var sum = 0;
    this.listaCuentas.forEach(c => sum += c.capitalCuenta?.capital || 0);
    return sum;
  }

  procesaRefrescar(refrescar) {
    this.refrescar.emit(refrescar);
  }
}
