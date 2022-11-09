import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

todos:Todo[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
