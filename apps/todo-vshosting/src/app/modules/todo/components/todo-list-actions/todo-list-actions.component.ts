import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListInterface } from "../../interfaces/todo-list.interface";

@Component({
  selector: 'app-todo-list-actions',
  templateUrl: './todo-list-actions.component.html',
  styleUrls: ['./todo-list-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListActionsComponent {
  @Output() editTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Output() approveEditTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Input() itemTodoListId!: number;
  @Input() itemTodoList!: TodoListInterface;
  editTodoItem(): void {
    this.editTodoItemEvent.emit(this.itemTodoList.id);
  }

  approveEditTodoItem(): void {
    this.approveEditTodoItemEvent.emit();
  }
  deleteTodoItem(): void {
    this.deleteTodoItemEvent.emit(this.itemTodoList.id);
  }
}
