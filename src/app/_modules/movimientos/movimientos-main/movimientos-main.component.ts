import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos-main',
  templateUrl: './movimientos-main.component.html',
  styleUrls: ['./movimientos-main.component.scss']
})
export class MovimientosMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procesaRefrescar(refrescar) {
    if (refrescar) {
    }
  }

}
