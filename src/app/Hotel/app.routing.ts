//Importar modulos dentro del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//Importar el modulo hotel y Edwin
import { HotelComponent } from './hotel.component';
import { EdwinComponent } from '../Edwin/edwin.component';
import { DepartamentoComponent } from '../departamento/departamento.component';
//import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from '../home/home.component';
import { ExternoComponent } from '../externo/externo.component';
import { ContactComponent } from '../contact/contact.component';
import { from } from 'rxjs';

const appRoutes:Routes=[
    
    {path:'', component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'externo',component:ExternoComponent},
    {path:'contact',component:ContactComponent},
    //{path:'Home/:nombre', component:HomeComponent},
    //{path:'Home/:nombre/:apellidos', component:HomeComponent},//variable apellidos opcional
    {path:'Hotel', component:HotelComponent},
    {path:'Hotel/:nombre', component:HotelComponent},
    {path:'Edwin',component:EdwinComponent},
    {path:'Departa',component:DepartamentoComponent},
    {path: '**',component:HomeComponent}
];
//Exportar el modulo del router
export const appRoutingProviders: any[]=[];//servicio de router , exportamos el servicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//Exportamos el modulo