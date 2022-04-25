import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { cryptodata } from '../models/crypto';
import {HttpClient} from '@angular/common/http';
import { CryptoCallService } from '../conversion/service/cryptocall.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  cryptodata?: cryptodata;
  cryptoname = new FormControl('', [Validators.required]);
  constructor(private service?: CryptoCallService) {
  }

  ngOnInit(): void {}

  submit(): void {
    this.cryptodata = {} as cryptodata;
    console.warn("we made it this far?", this.cryptoname);
      this.service?.getCryptoDetails(this.cryptoname.value).subscribe((response: any) => {
        this.cryptodata = response.data;
      });    
  }
  convert(): void {
   
  }
}
