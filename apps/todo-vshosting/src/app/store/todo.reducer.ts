import { createReducer, on } from "@ngrx/store";
import { InitialState } from "@ngrx/store/src/models";
import * as actions from './todo.acitons';
import { TodoListInterface } from "../modules/todo/interfaces/todo-list.interface";
export const todoFeatureKey = 'todo';
export interface TodoState {
  todoList: TodoListInterface[];
}
export const initialState: TodoState  = {
  todoList: []
}
export const TodoReducer = createReducer(
  initialState,
  on(actions.fetchAllTodos, () => initialState),
  on(actions.fetchAllTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList
  }))
)
