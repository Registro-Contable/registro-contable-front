import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  get totalCapital(): number {
    var sum = 0;
    this.listaCuentas.forEach(c => sum += c.capital);
    return sum;
  }
}
