import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover( $event: any, tarefa: Tarefa):void{

    $event.preventDefault();
    if(confirm('Deseja Remover a tarefa "' + tarefa.name + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.name + '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
