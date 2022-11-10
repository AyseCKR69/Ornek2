import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient:HttpClient) { }

 
}