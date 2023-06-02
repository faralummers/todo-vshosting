import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as actions from '../../store/todo.acitons';
import { Observable } from "rxjs";
import { TodoListInterface } from "./interfaces/todo-list.interface";
import { TodoFacade } from "../../store/todo.facade";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList$: Observable<TodoListInterface[]> = this.todoFacade.todoList$;
  igor = [];
  constructor(private store: Store, private todoFacade: TodoFacade) {}

  ngOnInit() {
    this.store.dispatch(actions.fetchAllTodos());
  }
}
