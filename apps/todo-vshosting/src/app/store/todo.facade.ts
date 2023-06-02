import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TodoListInterface } from "../modules/todo/interfaces/todo-list.interface";
import * as selectors from './todo.selector';

@Injectable({
  providedIn: 'root'
})
export class TodoFacade {
  todoList$: Observable<TodoListInterface[]> = this.store.select(selectors.todoListSelector);
  constructor(private store: Store) {}
}
