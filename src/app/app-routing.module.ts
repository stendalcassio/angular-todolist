import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TodolistAppComponent } from './pages/todolist-app/todolist-app.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'todolist-app', component: TodolistAppComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
