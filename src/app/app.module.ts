import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],

})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule); 