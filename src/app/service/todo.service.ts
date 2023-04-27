import { Todo } from "../models/todo.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()

export class TodoService{
  today = new Date();
  todos: Todo[];
  todoSubject = new Subject<any[]>();
  
  constructor( private httpClient : HttpClient){
    this.todos = []
    setTimeout(() => {

      this.todos = [
        {
          todoName : "Lorem Ipsum",
          todoStatus: true,
          image: "https://picsum.photos/id/0/200/300",
          isModif : false,
          description : "pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente ."

        },

      ]
      this.getTodoFromServer();
    }, 1000);
  }
  emitTodos(){
     this.todoSubject.next(this.todos);
    // this.saveTodoFromServer();
  }

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus
    this.emitTodos();
    this.saveTodoFromServer();

  }
  onChangeIsModif(i: number){
    this.todos[i].isModif = !this.todos[i].isModif
    this.emitTodos();
    this.saveTodoFromServer();

  }
  getTodo(index: number){
    if(this.todos[index]){
      return this.todos[index]
    }else{
      return false;
    }
  }
  
  addTodo(todo: Todo){
    this.todos.push(todo) ;
    console.log(this.todos);
    this.emitTodos();
    this.saveTodoFromServer();
    // this.todos.splice(0)

  }
  saveTodoFromServer(): void{
    this.httpClient.put("https://todo-list-app-24bce-default-rtdb.firebaseio.com/todo.json",this.todos)
    .subscribe(
      ()=>{
        console.log("donner enregistre avec success");

      },
      (error)=>{
        console.log("error d'envoi des donner "+error);

      }
    );
  }
  getTodoFromServer(): void{
    this.httpClient.get<Todo[]>("https://todo-list-app-24bce-default-rtdb.firebaseio.com/todo.json")
    .subscribe(
      (todoRecupe : Todo[])=>{
        this.todos = todoRecupe;
        this.emitTodos();
      },
      (error)=>{
        console.log("error de recuperation "+error);

      },
      ()=>{
        console.log("recuperation de donner terminer");

      }
    );
  }
}
/* this.todos = new Promise((resolve, reject)=>{
      const data = [
        {
          todoName : "projet 1",
          todoStatus: true,
          image: "https://placeimg.com/300/300/tech",
          isModif : false,
          description : "pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente ."

        },
        {
          todoName : "projet 2",
          todoStatus: false,
          image: "https://placeimg.com/300/300/tech",
          isModif : false,
          description : "pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente ."
        },
        {
          todoName : "projet 3",
          todoStatus: true,
          image: "https://placeimg.com/300/300/tech",
          isModif : false,
          description : "pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente ."
        },
        {
          todoName : "projet 3",
          todoStatus: false,
          image: "https://placeimg.com/300/300/tech",
          isModif : false,
          description : "pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente ."
        },

      ];
      if(data.length){
        this.todos = data
        setTimeout(() => {
          resolve(data);
        }, 2000);

      }else{
        reject("pas de données disponible sur le serveur ")
      }
    }); */
