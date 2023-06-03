import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoCreateInterface } from "../interfaces/todo-create.interface";
import { TodoListInterface } from "../interfaces/todo-list.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}
  api = 'https://api-204b8-3000.app.zerops.io/api';
  getAllTodos():Observable<TodoListInterface[]> {
    return this.http.get<TodoListInterface[]>(`${this.api}/todos`);
  }

  createTodo(todoItem: TodoCreateInterface): Observable<any> {
    return this.http.post(`${this.api}/todos`, {...todoItem});
  }

}
