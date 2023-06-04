import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from './todo.acitons';
import { catchError, map, of, switchMap } from "rxjs";
import { TodoService } from "../modules/todo/services/todo.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

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
            this._snackBar.open('Successfully created', 'OK', {duration: 6000});
            return [actions.createTodoItemSuccess(), actions.fetchAllTodos()];
          }),
          catchError(({message, status}: HttpErrorResponse) => {
            this._snackBar.open(message, 'Close', {duration: 6000});
            return of(actions.createTodoItemFailed({error: { message, status }}));
          }),
        )
      )
    )
  )

  markAllAsCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.markAllTodosAsCompleted),
      switchMap(() => this.todoService.markAllAsCompleted().pipe(
        map(() => {
         this._snackBar.open('Successfully marked all as completed', 'OK', {duration: 6000});
          return actions.markAllTodosAsCompletedSuccess();
        })
      )),
      catchError(({message, status}: HttpErrorResponse) => {
        this._snackBar.open(message, 'Close', {duration: 6000});
        return of(actions.createTodoItemFailed({error: { message, status }}))
      })
    )
  )

  editTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.editTodoItem),
      switchMap(({ editTodoItem }) => {
        return this.todoService.editTodoItem(editTodoItem).pipe(
          switchMap(response => {
            this._snackBar.open('Successfully updated', 'OK', {duration: 6000});
            return [actions.editTodoItemSuccess(), actions.fetchAllTodos()]
          }),
          catchError(({message, status}: HttpErrorResponse) => {
            this._snackBar.open(message, 'Close', {duration: 6000});
            return of(actions.editTodoItemFailed({error: { message, status }}))
          })
        )
      })
    )
  )

  deleteTodoItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteTodoItem),
      switchMap(({ itemTodoListId }) => {
        return this.todoService.deleteTodoItem(itemTodoListId).pipe(
          switchMap(() => {
            this._snackBar.open('Successfully deleted', 'OK', {duration: 6000});
            return [actions.deleteTodoItemSuccess(), actions.fetchAllTodos()]
          }),
          catchError(({message, status}: HttpErrorResponse) => {
            this._snackBar.open(message, 'Close', {duration: 6000});
            return of(actions.editTodoItemFailed({error: { message, status }}))
          })
        )
      })
    )
  )

  constructor(private actions$: Actions,
              private todoService: TodoService,
              private _snackBar: MatSnackBar
              ) {}

}
