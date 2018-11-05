import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EdwinComponent } from './Edwin/edwin.component';
import { HotelComponent } from './Hotel/hotel.component';
import { DepartamentoComponent } from './departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwinComponent,
    HotelComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
