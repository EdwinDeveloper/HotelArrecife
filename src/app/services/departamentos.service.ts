import { Injectable } from '@angular/core';//Importamos modulo injectable
import { apartment } from '../models/apartment';
@Injectable()//Decorador injectable
export class DepartamentoService{
    public department:Array<apartment>;//Declaro array tipo objetos apartment
    constructor(){
        this.department=[//le asignamos al array de objetos 3 objetos tipo apartment
            new apartment(1,"Av tepic Vallarta","ATV1","Avenue view","School area",false,3500),
            new apartment(2,"La abuela","ATV2","Avenue view","School area",true,2500),
            new apartment(3,"Azules","ATV3","widthout view","Footbol stadium",false,2500),
            new apartment(3,"Azules","ATV4","widthout view","hospital",false,3500)
          ]
    }
    getTexto():string{
        return "Oi meus amigos, e um gosto "
    }
    getDepartamentos(): Array<apartment>{
        return this.department;
    }
}

