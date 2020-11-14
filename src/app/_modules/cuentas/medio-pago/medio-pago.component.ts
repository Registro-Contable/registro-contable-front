import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedioPago } from '../cuentas.models';

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

  constructor() { }

  ngOnInit(): void {
  }

}
