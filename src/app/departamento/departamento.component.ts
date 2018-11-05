import { Component, OnInit } from '@angular/core';//se importa la clase component principal de angular
import { apartment } from '../models/apartment';//se inporta la clase apartment dentro de carpeta models
@Component({//agregamos un decorador
  selector: 'departamento',//nombre del selector del componente a usar en el html
  templateUrl: './departamento.component.html',//ruta de la vista html del componente
  styleUrls: ['./departamento.component.scss']//ruta del archivo scss estilos del componente
})
export class DepartamentoComponent implements OnInit {//clase DepartamentoComponent que implementa interfaz OnInit
  public department:Array<apartment>;//Declaro array tipo objetos apartment
  public direccion:String[];
  public area:String[];
  public color:String;
  public mi_depa:string;
  constructor() {//constructor para llamar el array declarado y asignarle objetos
    this.direccion=new Array();
    this.area=new Array();
    this.color="yellow";
    this.mi_depa="el centro";
    this.department=[//le asignamos al array de objetos 3 objetos tipo apartment
      new apartment(1,"Av tepic Vallarta","ATV1","Avenue view","School area",false,3500),
      new apartment(2,"La abuela","ATV2","Avenue view","School area",true,2500),
      new apartment(3,"Azules","ATV3","widthout view","Footbol stadium",false,2500),
      new apartment(3,"Azules","ATV4","widthout view","hospital",false,3500)
    ]
  }

  ngOnInit() {//se ejecuta al iniciar el componente despues del constructor
    //console.log(this.department);//mostramos en consola el array de objetos
    this.getDirection();
  }
  getDirection(){
      this.department.forEach((apartment,index)=>{
        this.area.push(apartment.direction);
           if(this.direccion.indexOf(apartment.location) < 0){
               this.direccion.push(apartment.location);
               
           }
      });
      console.log(this.area);
  }
  getMiDepa(){
    alert(this.mi_depa);
  }
  saveDepa(){
    if(this.direccion.indexOf(this.mi_depa) < 0){
      this.direccion.push(this.mi_depa);
    } 
  }
  deleteDepa(index:number){
    this.department.splice(index,1);
  }
  onblur(){
    console.log("Saliendo del input");
  }
  onKeyUp(){
    console.log("Key Up");
  }
}
