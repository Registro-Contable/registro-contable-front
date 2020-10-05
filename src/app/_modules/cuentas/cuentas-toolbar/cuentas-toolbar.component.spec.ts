import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasToolbarComponent } from './cuentas-toolbar.component';

describe('CuentasToolbarComponent', () => {
  let component: CuentasToolbarComponent;
  let fixture: ComponentFixture<CuentasToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
