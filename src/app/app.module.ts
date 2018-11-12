import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing,appRoutingProviders } from './Hotel/app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EdwinComponent } from './Edwin/edwin.component';
import { HotelComponent } from './Hotel/hotel.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipes';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EdwinComponent,
    HotelComponent,
    DepartamentoComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule//Importamos el metodo para poder utilizarlo en todas partes del proyecto
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
