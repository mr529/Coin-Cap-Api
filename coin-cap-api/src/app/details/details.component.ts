import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { cryptodata } from '../models/crypto';
import { CryptocallsService } from '../cryptocalls.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  cryptodata?: cryptodata;
  regex: string | RegExp = "^\$\d{1,3}(,\d{3})*(\.\d+)?$";
  cryptoname = new FormControl('', [Validators.required]);
  cryptoconvert = new FormControl('', Validators.pattern(this.regex));
  conversionValue?: number;
  constructor(private service?: CryptocallsService) {
  }

  ngOnInit(): void {}

  submit(): void {
    this.cryptodata = {} as cryptodata;
      this.service?.getCryptoDetails(this.cryptoname.value).subscribe((response: any) => {
        this.cryptodata = response.data;
      });    
  }
  convert(): void {
   this.conversionValue = this.cryptoconvert.value / parseInt(this.cryptodata?.priceUsd!)   
   console.warn(this.cryptoconvert);
  }
}
