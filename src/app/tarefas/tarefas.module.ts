import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers : [
    TarefaService
  ]
  
})
export class TarefasModule { }
