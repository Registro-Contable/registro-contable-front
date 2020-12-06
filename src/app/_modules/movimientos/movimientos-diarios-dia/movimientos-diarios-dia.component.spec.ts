import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosDiariosDiaComponent } from './movimientos-diarios-dia.component';

describe('MovimientosDiariosDiaComponent', () => {
  let component: MovimientosDiariosDiaComponent;
  let fixture: ComponentFixture<MovimientosDiariosDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosDiariosDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosDiariosDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
