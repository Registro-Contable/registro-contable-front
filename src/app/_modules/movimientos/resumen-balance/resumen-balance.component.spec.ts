import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenBalanceComponent } from './resumen-balance.component';

describe('ResumenBalanceComponent', () => {
  let component: ResumenBalanceComponent;
  let fixture: ComponentFixture<ResumenBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
