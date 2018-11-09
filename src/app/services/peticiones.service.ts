import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { Observable, Observable, Observable } from 'rxjs';

@Injectable()
export class PeticionesService{

    public url:string;

    constructor(
     public _http:HttpClient//Dpubliceclaramos la variable tipo HttpCliend para utilizar ajax
    ){
        this.url="https://reqres.in/";
    }
    getUser(userId):Observable<any>{
        return this._http.get(this.url+'api/users?page='+userId);
    }
}