import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CryptoCallService } from './conversion/service/cryptocall.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ListComponent } from './list/list.component'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FilterPipe } from './pipe/filter.pipe';



const effects: Type<any>[] | undefined = [

];
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    routingComponents,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [CryptoCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
