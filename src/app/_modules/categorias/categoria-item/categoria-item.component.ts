import { Component, Input, OnInit } from '@angular/core';
import { CategoriaResponse } from '../categorias.models';

@Component({
  selector: 'app-categoria-item',
  templateUrl: './categoria-item.component.html',
  styleUrls: ['./categoria-item.component.scss']
})
export class CategoriaItemComponent implements OnInit {

  @Input()
  categoria: CategoriaResponse;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
