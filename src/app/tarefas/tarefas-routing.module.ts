import { Routes } from "@angular/router";
import { CadastrarTarefasComponent } from "./cadastrar-tarefas/cadastrar-tarefas.component";
import { EditarTarefaComponent } from "./editar-tarefa/editar-tarefa.component";
import { ListarTarefasComponent } from "./listar-tarefas/listar-tarefas.component";

export const TarefaRoutes : Routes = [
    {
        path: 'tarefas',
        redirectTo : 'tarefas/listar-tarefas'
    },
    {
        path: 'tarefas/listar-tarefas',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastrar-tarefas',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar-tarefa/:id',
        component: EditarTarefaComponent
    }
]