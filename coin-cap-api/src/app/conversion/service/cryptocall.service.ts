import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap } from "rxjs"
import {HttpClient} from '@angular/common/http';
import { cryptodata } from "src/app/models/crypto";

@Injectable({ providedIn: 'root'})
export class CryptoCallService {
    constructor(private httpClient: HttpClient){}
    results: any;
    private _cryptodatalist: cryptodata[] = [];
    private _cryptodatadetails = {} as cryptodata;


    get cryptoData() {
        return this._cryptodatalist;
    }
    
    set cryptoData(cryptodata) {
        this._cryptodatalist = cryptodata;
    }

    get cryptoDetails() {
        return this._cryptodatadetails;
    }
    
    set cryptoDetails(cryptoDetails) {
        this._cryptodatadetails = cryptoDetails;
    }


    getCryptoList(): Observable<unknown> {
      return this.httpClient
      .get(
        `https://api.coincap.io/v2/assets`
      )
      .pipe(
        tap((response) => {
            this.results = response;
            this.cryptoData = this.results.data;        
        })
      );
  }
  getCryptoDetails(crypto:string): Observable<unknown>{
    return this.httpClient
     .get(
       `https://api.coincap.io/v2/assets/${crypto.toLocaleLowerCase()}`
     ).pipe(
        tap((response: any) => {
            console.warn(response);
            this.results = response;
            this.cryptoDetails = this.results.data;        
        })
    );
 }
}