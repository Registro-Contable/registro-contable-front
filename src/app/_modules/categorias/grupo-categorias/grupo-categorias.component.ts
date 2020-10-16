import { Component, Input, OnInit } from '@angular/core';
import { CategoriaResponse } from '../categorias.models';

@Component({
  selector: 'app-grupo-categorias',
  templateUrl: './grupo-categorias.component.html',
  styleUrls: ['./grupo-categorias.component.scss']
})
export class GrupoCategoriasComponent implements OnInit {

  @Input()
  tipoMovimiento: string;

  categorias: Array<CategoriaResponse>;

  constructor() { }

  ngOnInit(): void {
    this.categorias = this.getCategoriasTest();
  }


  getCategoriasTest(): Array<CategoriaResponse> {
    return [
      {
        id: "123",
        uid: "123",
        nombre: "Test1",
        tipoMovimiento: this.tipoMovimiento,
        subCategorias: [
          {
            id:"1234",
            parentId: "123",
            nombre: "Test 1-1"
          },
          {
            id:"1234",
            parentId: "123",
            nombre: "Test 1-2"
          }
        ]
      },
      {
        id: "123",
        uid: "123",
        nombre: "Test2",
        tipoMovimiento: this.tipoMovimiento
      },
      {
        id: "123",
        uid: "123",
        nombre: "Test3",
        tipoMovimiento: this.tipoMovimiento
      }
    ];
  }

}
