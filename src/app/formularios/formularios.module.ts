import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { formularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    formularioComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule 
  ]
})
export class FormulariosModule { }
