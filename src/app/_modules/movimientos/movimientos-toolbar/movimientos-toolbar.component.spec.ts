import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosToolbarComponent } from './movimientos-toolbar.component';

describe('MovimientosToolbarComponent', () => {
  let component: MovimientosToolbarComponent;
  let fixture: ComponentFixture<MovimientosToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
