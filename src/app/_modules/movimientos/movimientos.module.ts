import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCrearMovimientoComponent } from './dialog-crear-movimiento/dialog-crear-movimiento.component';
import { MovimientosDiariosDiaComponent } from './movimientos-diarios-dia/movimientos-diarios-dia.component';
import { MovimientosDiariosGroupComponent } from './movimientos-diarios-group/movimientos-diarios-group.component';
import { MovimientosDiariosMovimientoComponent } from './movimientos-diarios-movimiento/movimientos-diarios-movimiento.component';
import { MovimientosMainComponent } from './movimientos-main/movimientos-main.component';
import { MovimientosToolbarComponent } from './movimientos-toolbar/movimientos-toolbar.component';
import { ResumenBalanceComponent } from './resumen-balance/resumen-balance.component';
import { SelectorMesesComponent } from './selector-meses/selector-meses.component';



@NgModule({
  declarations: [MovimientosMainComponent, MovimientosToolbarComponent, MovimientosDiariosGroupComponent, ResumenBalanceComponent, MovimientosDiariosDiaComponent, SelectorMesesComponent, MovimientosDiariosMovimientoComponent, DialogCrearMovimientoComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MovimientosMainComponent
  ],
  providers: []
})
export class MovimientosModule { }
