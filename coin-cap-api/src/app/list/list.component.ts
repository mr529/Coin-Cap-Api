import { Component, OnInit } from '@angular/core';
import { CryptoCallService } from '../conversion/service/cryptocall.service';
import { cryptodata } from '../models/crypto';
import * as _ from 'lodash';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cryptodata?: cryptodata[];
  filteredString: string = '';

  constructor(private service?: CryptoCallService) { }
  ngOnInit(): void {
    this.getCryptoData();
  }
  
  getCryptoData(): void {
    this.cryptodata = this?.service?.cryptoData;
    console.warn(this.cryptodata);
    if (this.cryptodata?.length === 0) {
      this.service?.getCryptoList().subscribe(
        (response: any) => {
        this.cryptodata = response.data;
      },
      (error) => {
        console.warn(error);
      }
      );    
    }
  }
}
