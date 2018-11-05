import { Component, OnInit } from '@angular/core';//se importa la clase component principal de angular
import { apartment } from '../models/apartment';//se inporta la clase apartment dentro de carpeta models
@Component({//agregamos un decorador
  selector: 'departamento',//nombre del selector del componente a usar en el html
  templateUrl: './departamento.component.html',//ruta de la vista html del componente
  styleUrls: ['./departamento.component.scss']//ruta del archivo scss estilos del componente
})
export class DepartamentoComponent implements OnInit {//clase DepartamentoComponent que implementa interfaz OnInit
  public department:Array<apartment>;//Declaro array tipo objetos apartment
  constructor() {//constructor para llamar el array declarado y asignarle objetos
    this.department=[//le asignamos al array de objetos 3 objetos tipo apartment
      new apartment(1,"Av tepic Vallarta","ATV1","Avenue view","School area",false,2500),
      new apartment(2,"Av tepic Vallarta","ATV2","Avenue view","School area",true,2500),
      new apartment(3,"Av tepic Vallarta","ATV3","widthout view","School area",false,2500)
    ]
  }

  ngOnInit() {//se ejecuta al iniciar el componente despues del constructor
    console.log(this.department);//mostramos en consola el array de objetos
  }

}
