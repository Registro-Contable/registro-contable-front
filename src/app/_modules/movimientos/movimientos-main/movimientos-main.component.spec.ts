import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosMainComponent } from './movimientos-main.component';

describe('MovimientosMainComponent', () => {
  let component: MovimientosMainComponent;
  let fixture: ComponentFixture<MovimientosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
