import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}
  api = 'https://api-204b8-3000.app.zerops.io/api';
  getAllTodos():Observable<any> {
    return this.http.get(`${this.api}/todos`)
  }

}
