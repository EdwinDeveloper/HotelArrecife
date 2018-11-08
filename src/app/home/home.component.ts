import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public identificado:boolean;
  constructor() {
    this.identificado=false;
  }

  ngOnInit() {
  }
  unIdentificar(){
    this.identificado=false;
    console.log(this.identificado);
  }
  Identificar(){
    this.identificado=true;
    console.log(this.identificado);
  }

}
