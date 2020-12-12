import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movimientos-main',
  templateUrl: './movimientos-main.component.html',
  styleUrls: ['./movimientos-main.component.scss']
})
export class MovimientosMainComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  procesaRefrescar(refrescar) {
    if (refrescar) {
      this.eventsSubject.next();
    }
  }

}
