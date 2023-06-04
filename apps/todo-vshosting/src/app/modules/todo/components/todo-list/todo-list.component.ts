import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListInterface } from "../../interfaces/todo-list.interface";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Output() editTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Output() approveEditTodoItemEvent: EventEmitter<any> = new EventEmitter();
  @Input() itemTodoList!: TodoListInterface;
  @Input() itemTodoListId!: number;
  editedItem: FormControl = new FormControl('');
  editTodoItem(itemTodoListId: number): void {
    this.editTodoItemEvent.emit(itemTodoListId);
    this.editedItem.patchValue(this.itemTodoList?.text);
  }

  deleteTodoItem(itemTodoListId: number): void {
    this.deleteTodoItemEvent.emit(itemTodoListId);
  }

  approveEditTodoItem(text: string): void {
    this.approveEditTodoItemEvent.emit({...this.itemTodoList, text});
  }
}
