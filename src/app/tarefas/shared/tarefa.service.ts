import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    let tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrarTarefa(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

  buscarPorId(id : number): Tarefa {
    const tarefas:Tarefa[] = this.listarTodos();
    return tarefas.find(x => x.id === id)!;
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos(); 
    tarefas.forEach((obj, idx, objs) => {
      if (tarefa.id === obj.id){
        objs[idx] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); 
  }

  remover(id:number): void{
    let tarefas : Tarefa[] = this.listarTodos();

    tarefas = tarefas.filter(x => x.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number) : void{
    const tarefas : Tarefa[] = this.listarTodos();

    tarefas.forEach( (tarefa, idx, objs) => {
      if (tarefa.id === id){
        objs[idx].finished = !objs[idx].finished;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }

}
