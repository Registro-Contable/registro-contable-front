import { Component, Input, OnInit } from '@angular/core';
import { SubCategoriaResponse } from '../categorias.models';

@Component({
  selector: 'app-subcategoria-item',
  templateUrl: './subcategoria-item.component.html',
  styleUrls: ['./subcategoria-item.component.scss']
})
export class SubcategoriaItemComponent implements OnInit {

  @Input()
  subcategoria: SubCategoriaResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
