import { Component, OnInit } from '@angular/core';
import { ContactUser } from '../models/ContactUser';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public usu:ContactUser;
  constructor() { 
    this.usu=new ContactUser('','','','');
  }

  ngOnInit() {
  }
  onSubmit(formContacto){
    console.log("Evento submit lanzado");
    console.log(this.usu);
    formContacto.reset();
  }

}
