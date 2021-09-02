import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa')
  formTarefa : NgForm;

  tarefa : Tarefa;


  constructor(
    private tarefaService : TarefaService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrarTarefa(this.tarefa);
      this.router.navigate(["/tarefas/listar-tarefas"]);
    }
  }

}
