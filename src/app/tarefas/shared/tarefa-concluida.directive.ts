import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input()
  tarefaConcluida : boolean;

  constructor(private el: ElementRef, private ref: ActivatedRoute) { }


  ngOnInit(): void {

    if (this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
