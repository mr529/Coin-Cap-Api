import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { cryptodata } from './models/crypto';

@Injectable()
export class CryptocallsService {

  constructor(private httpClient: HttpClient){}
  resultsList?: cryptodata[] = [];
  resultDetails? = {} as cryptodata;



  getCryptoList(): Observable<any> {
    return this.httpClient
    .get(
      `https://api.coincap.io/v2/assets`
    )
    .pipe(
      tap((response: any) => {
          this.resultsList = response.data;
      })
    );
  }
  getCryptoDetails(crypto:string): Observable<unknown>{   
    return this.httpClient
   .get(
     `https://api.coincap.io/v2/assets/${crypto.toLocaleLowerCase()}`
   ).pipe(
      tap((response: any) => {
          this.resultDetails = response.data;
      })
    );
  }
}
