import { TestBed } from '@angular/core/testing';

import { CryptocallsService } from './cryptocalls.service';

describe('CryptocallsService', () => {
  let service: CryptocallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
