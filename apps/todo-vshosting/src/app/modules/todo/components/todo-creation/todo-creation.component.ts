import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { markAllTodosAsCompleted } from "../../../../store/todo.acitons";

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.scss']
})
export class TodoCreationComponent {
  todoCreationText = new FormControl('');
  @Output() createTodoItem = new EventEmitter<any>();
  @Output() markAllAsCompleted = new EventEmitter<any>();
  constructor() {}
  createTodo(): void {
    this.createTodoItem.emit(this.todoCreationText.value);
    this.todoCreationText.reset();
  }

  markAllTodosAsCompleted(): void {
    this.markAllAsCompleted.emit()
  }
}
