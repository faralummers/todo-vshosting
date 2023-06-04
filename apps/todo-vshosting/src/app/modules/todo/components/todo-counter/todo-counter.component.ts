import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCounterComponent {
  @Input() completedTasks!: number | null;
  @Input() newTasks!: number | null;
}
