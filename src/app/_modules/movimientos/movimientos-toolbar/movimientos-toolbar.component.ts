import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movimientos-toolbar',
  templateUrl: './movimientos-toolbar.component.html',
  styleUrls: ['./movimientos-toolbar.component.scss']
})
export class MovimientosToolbarComponent implements OnInit {

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
