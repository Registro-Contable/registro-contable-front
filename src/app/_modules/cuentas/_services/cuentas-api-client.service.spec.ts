import { TestBed } from '@angular/core/testing';

import { CuentasApiClientService } from './cuentas-api-client.service';

describe('CuentasApiClientService', () => {
  let service: CuentasApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentasApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
