import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoCategoriasComponent } from './grupo-categorias.component';

describe('GrupoCategoriasComponent', () => {
  let component: GrupoCategoriasComponent;
  let fixture: ComponentFixture<GrupoCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
