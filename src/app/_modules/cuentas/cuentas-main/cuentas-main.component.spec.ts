import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasMainComponent } from './cuentas-main.component';

describe('CuentasMainComponent', () => {
  let component: CuentasMainComponent;
  let fixture: ComponentFixture<CuentasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
