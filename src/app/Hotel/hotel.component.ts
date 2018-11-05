import { Component } from '@angular/core';

@Component({
    selector: "hotel",
    //templateUrl:'./hotel.component'
    templateUrl:'./hotel.component.html'
})
export class HotelComponent{
    public Nomb:string;

    constructor(){
        this.Nomb="Arrecife";
    }
}