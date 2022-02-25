import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.model";


@Injectable()

export class TodoService{
  today = new Date();
  todos: Todo[] | any;
  todoSubject = new Subject<any[]>();

  constructor(){
    setTimeout(() => {
      this.todos = [
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

      ]
      this.emitTodos();
    }, 5000);
  }
  emitTodos(){
    this.todoSubject.next(this.todos)

  }
  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus
    this.emitTodos();
  }
  onChangeIsModif(i: number){
    this.todos[i].isModif = !this.todos[i].isModif
    this.emitTodos();
  }
  getTodo(index: number){
    if(this.todos[index]){
      return this.todos[index]
    }else{
      return false;
    }
  }
  addTodo(todo: Todo): void{
    this.todos.unshift(todo);
    this.emitTodos();
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
