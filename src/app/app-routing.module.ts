import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { RouterModule, Routes } from '@angular/router';


const ROUTES : Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'not-Found', component: NotFoundComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-todo', component:   AddTodoComponent},
  {path: 'users', component:  UsersComponent },
  {path: 'add-user', component:   AddUserComponent},
  {path: 'single-todo/:id', component: SingleTodoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'not-Found'},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
