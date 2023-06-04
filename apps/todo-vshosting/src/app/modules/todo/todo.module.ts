import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoRouting } from "./todo-routes";
import { TodoComponent } from "./todo.component";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { TodoCreationComponent } from './components/todo-creation/todo-creation.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";
import { TodoCounterComponent } from './components/todo-counter/todo-counter.component';
import { MatBadgeModule } from "@angular/material/badge";
import {MatIconModule} from '@angular/material/icon';
import { TodoListActionsComponent } from './components/todo-list-actions/todo-list-actions.component';

@NgModule({
  declarations: [TodoComponent, TodoCreationComponent, TodoFiltersComponent, TodoListComponent, TodoCounterComponent, TodoListActionsComponent],
    imports: [CommonModule, MatIconModule, ReactiveFormsModule, TodoRouting, MatInputModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatBadgeModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TodoModule {}
