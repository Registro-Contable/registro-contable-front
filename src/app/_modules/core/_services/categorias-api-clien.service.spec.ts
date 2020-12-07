import { TestBed } from '@angular/core/testing';

import { CategoriasApiClienService } from './categorias-api-clien.service';

describe('CategoriasApiClienService', () => {
  let service: CategoriasApiClienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasApiClienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
