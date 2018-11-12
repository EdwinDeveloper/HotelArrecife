import { Component } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: "hotel",
    //templateUrl:'./hotel.component'
    templateUrl:'./hotel.component.html'
})
export class HotelComponent{
    public Nomb:string;
    public nombre:string;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router
    ){
        this.Nomb="Arrecife";
    }
    ngOnInit(){
        this._route.params.subscribe((params:Params)=>{
                this.nombre=params.nombre;
        });
    }
    redirigir(){
        this._router.navigate(['/Edwin']);
    }
}