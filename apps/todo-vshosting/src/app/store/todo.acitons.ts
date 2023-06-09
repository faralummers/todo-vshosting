import { createAction, props } from "@ngrx/store";
import { TodoListInterface } from "../modules/todo/interfaces/todo-list.interface";
import { TodoCreateInterface } from "../modules/todo/interfaces/todo-create.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpMetaUtils } from "../modules/todo/utils/http-meta-utils";
const scope = '[TODO]'
export const fetchAllTodos = createAction(`${scope} Fetch All todos`);
export const fetchAllTodosSuccess = createAction(`${scope} Fetch all todos success`, (todoList: TodoListInterface[]) => ({
  todoList
}));
export const createTodoItem = createAction(`${scope} Create todo item`,(todoListItem: TodoCreateInterface) => ({
  todoListItem
  })
);
export const createTodoItemSuccess = createAction(`${scope} Create todo item success`);
export const createTodoItemFailed = createAction(`${scope} Create todo item failed`, HttpMetaUtils.errorProps);
export const filterTasks = createAction(`${scope} Filter tasks`, (taskFilter: {completedTasks: boolean, newTasks: boolean}) => taskFilter);
export const markAllTodosAsCompleted = createAction(`${scope} Mark all todos as completed`);
export const markAllTodosAsCompletedSuccess = createAction(`${scope} Mark all todos as completed success`);

export const editTodoItem = createAction(`${scope} Edit todo item`, (editTodoItem: TodoListInterface) => ({
  editTodoItem
}));
export const editTodoItemSuccess = createAction(`${scope} Edit todo item success`);
export const editTodoItemFailed = createAction(`${scope} Edit todo item failed`, HttpMetaUtils.errorProps);

export const deleteTodoItem = createAction(`${scope} Delete todo item`, (itemTodoListId: number) => ({
  itemTodoListId
}));

export const deleteTodoItemSuccess = createAction(`${scope} Delete todo item success`);
export const deleteTodoItemFailed = createAction(`${scope} Delete todo item failed`, HttpMetaUtils.errorProps);
