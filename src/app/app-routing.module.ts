import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas/tarefas-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/tarefas/listar-tarefas',
    pathMatch : 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
