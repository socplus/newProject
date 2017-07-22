import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';

import {  AppServices }         from './app.service';
import {  StarRatingComponent }   from './starrating.component';
import {  CounterComponent } from   './counter.component';
import {  CarouselComponent} from   './carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    StarRatingComponent,
    CounterComponent,
    CarouselComponent   
  ],
  providers: [ AppServices ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
