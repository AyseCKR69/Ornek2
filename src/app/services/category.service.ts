import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient:HttpClient) { }

 
}
