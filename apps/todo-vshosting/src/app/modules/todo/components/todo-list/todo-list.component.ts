import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoListInterface } from "../../interfaces/todo-list.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todoItem!: TodoListInterface;
}
