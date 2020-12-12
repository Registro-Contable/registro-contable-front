import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosDiariosMovimientoComponent } from './movimientos-diarios-movimiento.component';

describe('MovimientosDiariosMovimientoComponent', () => {
  let component: MovimientosDiariosMovimientoComponent;
  let fixture: ComponentFixture<MovimientosDiariosMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosDiariosMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosDiariosMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
