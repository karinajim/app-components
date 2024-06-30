import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CargarArticuloComponent } from './componentes/cargar-articulo/cargar-articulo.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'articulo',component:CargarArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
