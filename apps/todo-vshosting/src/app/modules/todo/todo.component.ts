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
  completedTasks$!: Observable<number | null>;
  newTasks$!: Observable<number | null>;
  constructor(private store: Store, private todoFacade: TodoFacade) {}

  ngOnInit() {
    this.store.dispatch(actions.fetchAllTodos());
    this.completedTasks$ = this.todoFacade.completedTasksCounter$
    this.newTasks$ = this.todoFacade.newTasksCounter$;
  }

  createTodoItem(todoItem: string): void {
    this.store.dispatch(actions.createTodoItem({ text: todoItem, completed: false }));
  }
  filterTasks(taskFilter: { completedTasks: boolean, newTasks: boolean }): void {
    this.store.dispatch(actions.filterTasks(taskFilter));
  }
}
