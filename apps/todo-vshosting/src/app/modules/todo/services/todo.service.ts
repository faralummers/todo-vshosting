import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoCreateInterface } from "../interfaces/todo-create.interface";
import { TodoListInterface } from "../interfaces/todo-list.interface";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getAllTodos():Observable<TodoListInterface[]> {
    return this.http.get<TodoListInterface[]>(`${environment.api}/todos`);
  }

  createTodo(todoItem: TodoCreateInterface): Observable<any> {
    return this.http.post(`${environment.api}/todos`, {...todoItem});
  }

  markAllAsCompleted(): Observable<any> {
    return this.http.patch(`${environment.api}/todos/mark-all-as-completed`, {}, { params: {
        clientId: environment.clientId
      }});
  }

  editTodoItem(todoItem: TodoListInterface): Observable<any> {
    return this.http.put(`${environment.api}/todos/${todoItem.id}`, {text: todoItem.text, completed: todoItem.completed});
  }

  deleteTodoItem(todoItemId: number): Observable<any> {
    return this.http.delete(`${environment.api}/todos/${todoItemId}`);
  }
}
