import { Component, Input, OnInit } from '@angular/core';
import { Cuenta } from '../cuentas.models';

@Component({
  selector: 'app-cuenta-item',
  templateUrl: './cuenta-item.component.html',
  styleUrls: ['./cuenta-item.component.scss']
})
export class CuentaItemComponent implements OnInit {

  @Input("cuenta")
  cuenta: Cuenta;

  constructor() { }

  ngOnInit(): void {
  }

}
