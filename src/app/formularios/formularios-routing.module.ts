import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: "",
    component: formularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
