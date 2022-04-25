import { Component, OnInit } from '@angular/core';
import { CryptocallsService } from '../cryptocalls.service';
import { cryptodata } from '../models/crypto';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cryptodata?: cryptodata[];
  filteredString: string = '';

  constructor(private service?: CryptocallsService) { }
  ngOnInit(): void {
    this.getCryptoData();
  }
  
  getCryptoData(): void {
    this.cryptodata = this?.service?.resultsList;
    if (this.cryptodata?.length === 0 || this.cryptodata === undefined) {
      this.service?.getCryptoList().subscribe(
        (response: any) => {
        this.cryptodata = response.data;
      }
      );    
    }
  }
}
