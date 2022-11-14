import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    //let newPath=this.apiUrl+"adres"
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodosByCategory(categoryId:number): Observable<Todo[]> {
    //let newPath=this.apiUrl+"adres"+categoryId
    //örnek url=products/getbycategory?categoryId=1 gibi
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

}
