import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public firstName:any;
  public userId:any;



  constructor(private _peticionesService:PeticionesService) {
    this.userId=1;
   }



  ngOnInit() {
     this.cargaUsuario();
  }
  cargaUsuario(){
    this.user=false;
    this._peticionesService.getUser(this.userId).subscribe(
      (response)=>{
        this.user=response.data;
        console.log(this.user[this.userId].first_name);
        this.firstName=this.user[this.userId].first_name;
      },
      (error)=>{
        console.log("Error en  : "+error);
      }
      );
  }

}
