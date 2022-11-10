import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  todos: Todo[] = [];
  dataLoaded=false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  // asenkron olduğu için subscrible yazıyoruz
  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
     
      this.todos = response;
      this.dataLoaded=true;
    });
  }
}
