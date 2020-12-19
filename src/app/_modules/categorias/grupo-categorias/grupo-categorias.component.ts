import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaRequest, CategoriaResponse } from '../../core/models/categorias.models';
import { CategoriasApiClienService } from '../../core/_services/categorias-api-clien.service';
import { DialogCrearCategoriaComponent } from '../dialog-crear-categoria/dialog-crear-categoria.component';

@Component({
  selector: 'app-grupo-categorias',
  templateUrl: './grupo-categorias.component.html',
  styleUrls: ['./grupo-categorias.component.scss']
})
export class GrupoCategoriasComponent implements OnInit {

  @Input()
  tipoMovimiento: string;

  categorias: Array<CategoriaResponse>;

  constructor(public dialog: MatDialog, private categoriasApiClient: CategoriasApiClienService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  procesaRefrescar(refrescar): void {
    if (refrescar === true) {
      this.cargarCategorias();
    }
  }

  private cargarCategorias(): void {
    this.categoriasApiClient.listaCategorias(this.tipoMovimiento)
      .then(list => {
        this.categorias = list;
      })
      .catch(err => {
        console.log(err);
      });
  }

  openCrearCategoriaDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearCategoriaComponent, {
      width: '250px',
      data: {
        titulo: 'Crear categoria',
        nombre: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const categoria: CategoriaRequest = {
          nombre: result,
          tipoMovimiento: this.tipoMovimiento
        };
        this.categoriasApiClient.addCategoria(categoria)
          .then(res => this.categorias.push(res))
          .catch(err => {
            console.log(err);
          });
      }
    });
  }

}
