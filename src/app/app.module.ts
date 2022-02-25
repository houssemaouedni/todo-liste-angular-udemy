import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoService } from "./service/todo.service";
import { TodoComponent } from "./todo/todo.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';

export const ROUTES : Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'not-Found', component: NotFoundComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-todo', component:   AddTodoComponent},
  {path: 'single-todo/:id', component: SingleTodoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'not-Found'},
]

@NgModule({
  declarations:[
    AppComponent,
    TodoComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers:[TodoService],
  bootstrap:[
    AppComponent
  ]
})


export class AppModule {}
