import { TestBed } from '@angular/core/testing';

import { CryptocallsService } from './cryptocalls.service';

describe('CryptocallsService', () => {
  let service: CryptocallsService;
  let test = 'bitcoin';
  let json = {"data":{"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"19021956.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"750331161441.4092980939724432","volumeUsd24Hr":"13529646473.3183200290893900","priceUsd":"39445.5313344962683172","changePercent24Hr":"-0.0903653008032089","vwap24Hr":"38913.8021542774994859","explorer":"https://blockchain.info/"},"timestamp":1650909479274};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getBitcoinDetail should return value from a promise',
    (done: DoneFn) => {
    service.getCryptoDetails(test).subscribe(value => {
      expect(value).toBe(json);
      done();
    });
  });
});
