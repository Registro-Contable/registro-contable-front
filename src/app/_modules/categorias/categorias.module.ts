import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasMainComponent } from './categorias-main/categorias-main.component';



@NgModule({
  declarations: [CategoriasMainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriasMainComponent
  ]
})
export class CategoriasModule { }
