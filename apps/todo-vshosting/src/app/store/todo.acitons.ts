import { createAction } from "@ngrx/store";
import { TodoListInterface } from "../modules/todo/interfaces/todo-list.interface";
const scope = '[TODO]'
export const fetchAllTodos = createAction(`${scope} Fetch All todos`);
export const fetchAllTodosSuccess = createAction(`${scope} Fetch all todos success`, (todoList: TodoListInterface[]) => ({
  todoList
}))
