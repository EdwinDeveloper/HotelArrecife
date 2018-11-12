import { Component, OnInit , DoCheck ,OnDestroy } from '@angular/core';
//import { nom }
@Component({
    selector: 'Edwin',
    templateUrl: './edwin.component.html'
})

export class EdwinComponent implements OnInit,DoCheck{
   
    
    public hotel:string;
    public ubicacion:string;
    constructor(){
        this.hotel="Arrecife Mezcalez";
        this.ubicacion="Mezcales Nayarit Bahia de Banderas";
        // @Component()
    }
    ngOnInit(){
        //console.log("This proyect will grow som much");
    }
    ngDoCheck(){
        //console.log('Do check ejecutado');
    }
    ngOnDestroy(){
        //console.log("Elemento destruido");
    }
    cambiarTitulo(){
        this.hotel="Nuevo hotel arrecife proximamente";
    }
    
}