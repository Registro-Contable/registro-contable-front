import { TestBed } from '@angular/core/testing';

import { MovimientosApiClientService } from './movimientos-api-client.service';

describe('MovimientosApiClientService', () => {
  let service: MovimientosApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientosApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
