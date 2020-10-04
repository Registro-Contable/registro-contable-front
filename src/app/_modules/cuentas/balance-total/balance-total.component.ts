import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-total',
  templateUrl: './balance-total.component.html',
  styleUrls: ['./balance-total.component.scss']
})
export class BalanceTotalComponent implements OnInit {

  @Input()
  totalCapital: number = 0;
  @Input()
  totalDeber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get balance(): number {
    return this.totalCapital - this.totalDeber;
  }

}
