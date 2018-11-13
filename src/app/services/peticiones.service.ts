import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
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
    addUser(user):Observable<any>{
        let params = JSON.stringify(user);
        let Headers = new HttpHeaders().set('Content-Type','aplication/json');
        return this._http.post(this.url+"api/useres",params,{headers:Headers});
    }
}