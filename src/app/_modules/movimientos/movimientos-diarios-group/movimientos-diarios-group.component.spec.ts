import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosDiariosGroupComponent } from './movimientos-diarios-group.component';

describe('MovimientosDiariosGroupComponent', () => {
  let component: MovimientosDiariosGroupComponent;
  let fixture: ComponentFixture<MovimientosDiariosGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosDiariosGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosDiariosGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
