import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './todo.acitons';
import { catchError, map, of, switchMap } from "rxjs";
import { TodoService } from "../modules/todo/services/todo.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class TodoEffects {
  fetchAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchAllTodos),
      switchMap(() =>
        this.todoService.getAllTodos().pipe(
          map(response => actions.fetchAllTodosSuccess(response)),
        )
      )
    )
  )
  createTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createTodoItem),
      switchMap((todoItem) =>
        this.todoService.createTodo(todoItem.todoListItem).pipe(
          switchMap(() => {
            return [actions.createTodoItemSuccess(), actions.fetchAllTodos()];
          }),
          catchError(({message, status}: HttpErrorResponse) => of(actions.createTodoItemFailed({error: { message, status }})))
        )
      )
    )
  )

  constructor(private actions$: Actions,
              private todoService: TodoService) {}

}
