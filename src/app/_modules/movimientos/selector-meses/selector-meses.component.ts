import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MESES } from '../../core/models/movimientos.models';

@Component({
  selector: 'app-selector-meses',
  templateUrl: './selector-meses.component.html',
  styleUrls: ['./selector-meses.component.scss']
})
export class SelectorMesesComponent implements OnInit {

  @Input()
  dateSelected: Date;
  @Output()
  cambioMes = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
    this.dateSelected = new Date();
  }

  anterior() {
    this.dateSelected = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth() - 1, this.dateSelected.getDate());
    this.cambioMes.emit(this.dateSelected);
  }

  posterior() {
    this.dateSelected = new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth() + 1, this.dateSelected.getDate());
    this.cambioMes.emit(this.dateSelected);
  }

  get mes(): string {
    const mes = this.dateSelected.getMonth();
    return `${MESES[mes]} ${this.dateSelected.getFullYear()}`;
  }

}
