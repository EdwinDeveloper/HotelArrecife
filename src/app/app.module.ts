import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing,appRoutingProviders } from './Hotel/app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EdwinComponent } from './Edwin/edwin.component';
import { HotelComponent } from './Hotel/hotel.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwinComponent,
    HotelComponent,
    DepartamentoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
