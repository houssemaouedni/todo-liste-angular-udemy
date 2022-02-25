import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  today: any;
  todos: any;
  todosSub: Subscription | any;

  constructor(private todoService : TodoService,
              private router: Router){

  }
  ngOnInit(): void {
      this.today = this.todoService.today;
      this.todosSub = this.todoService.todoSubject.subscribe((value :any[])=>{
        this.todos = value
      },(error)=>{
        console.log(error);

      },
      ()=>{
        console.log("obs Complete");

      }
    );
    this.todoService.emitTodos();

  }
  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);

  }
  onChangeIsModif(i: number){
    this.todoService.onChangeIsModif(i);
  }
  onView(id : number){
    this.router.navigate(["single-todo", id])
  }
  ngOnDestroy(): void {
      this.todosSub.unsubscribe();
  }
}
