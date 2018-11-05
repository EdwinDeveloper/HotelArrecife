import { Component } from '@angular/core';
import { HotelArrecife } from './models/components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mostrar:boolean=true;
  public Ciudad:string;
  public Ubicacion:string;
  public Referencia:string;
  title = 'Hotel meu amigo do brasil';
  constructor(){
    this.title=HotelArrecife.Nombre;
    this.Ciudad=HotelArrecife.Ciudad;
    this.Ubicacion=HotelArrecife.Ubicacion;
    this.Referencia=HotelArrecife.Referencia;
  }
  ocultarComponente(valor){
    this.mostrar=valor;
  }
}
