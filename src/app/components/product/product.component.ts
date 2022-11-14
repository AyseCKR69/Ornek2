import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
//ActivatedRoute=aktifleştirilmiş ruut demek yani url okuma
  constructor(private todoService: TodoService,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getTodosByCategory(params["categoryId"])
      }else{
        this.getTodos()
      }
    })
  }

  // asenkron olduğu için subscrible yazıyoruz
  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
     
      this.todos = response;
      this.dataLoaded=true;
    });
  }

  getTodosByCategory(categoryId:number) {
    this.todoService.getTodosByCategory(categoryId).subscribe((response) => {
     
      this.todos = response;
      this.dataLoaded=true;
    });
  }
}
