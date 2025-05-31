import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './components/consulta-form/consulta-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/consultas', pathMatch: 'full' }, // Rota padrão
  { path: 'consultas', component: ConsultaListComponent },
  { path: 'consultas/nova', component: ConsultaFormComponent }, // Rota para criar
  { path: 'consultas/editar/:id', component: ConsultaFormComponent } // Rota para editar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }