import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class formularioComponent  {
public nombre: string;
public apellido: string;

constructor(){
  this.nombre ='';
  this.apellido='';
}

}

