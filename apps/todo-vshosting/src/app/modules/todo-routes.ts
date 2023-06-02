import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";

export const todoRoutes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];

export const TodoRouting = RouterModule.forChild(todoRoutes);
