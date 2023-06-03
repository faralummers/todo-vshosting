import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFiltersComponent implements OnInit {
  filterTasksForm!: FormGroup;
  @Output() filterTasks: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.filterTasksForm = this.fb.group({
      completedTasks: false,
      newTasks: false
    });
    this.filterTasksForm.valueChanges.subscribe(res => this.filterTasks.emit(res));
  }
}
