import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './todo.acitons';
import { catchError, map, switchMap } from "rxjs";
import { TodoService } from "../modules/todo/services/todo.service";

@Injectable()
export class TodoEffects {
  fetchAllTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchAllTodos),
      switchMap(() =>
        this.todoService.getAllTodos().pipe(
          map(response => actions.fetchAllTodosSuccess(response)),
        )
      )
    )
  )

  constructor(private actions$: Actions,
              private todoService: TodoService) {}

}
