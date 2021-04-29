import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';
import { IndicadorSeleccionadoComponent } from './indicador-seleccionado/indicador-seleccionado.component';
import { DetalleIndicadorComponent } from './detalle-indicador/detalle-indicador.component';


const routes: Routes = [
  {path: '', component: ListadoComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'indicadorseleccionado/:id', component: IndicadorSeleccionadoComponent},
  {path: 'detalleindicador/:id', component: DetalleIndicadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
