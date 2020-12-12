import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-balance',
  templateUrl: './resumen-balance.component.html',
  styleUrls: ['./resumen-balance.component.scss']
})
export class ResumenBalanceComponent implements OnInit {
  
  @Input()
  ingresos: number = 0;
  @Input()
  gastos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get balance(): number {
    return this.ingresos - this.gastos;
  }
}
