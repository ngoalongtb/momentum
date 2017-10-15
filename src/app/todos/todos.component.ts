import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TODOS} from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() activeModule: string;
  @Output() output = new EventEmitter();
  
  categorys = TODOS;
  todos = [];

  todo = {

  }

  constructor() {
    this.todos = this.categorys[0].todos;
    console.log(this.categorys[0]);
  }

  ngOnInit() {
    console.log(this.activeModule);
  }
  close(){
    this.output.emit(""); 
  }
  showDetail(todo){
    this.todo = todo;
    console.log(todo);
  }
  showTodos(todos){
    this.todos = todos;
    this.todo = {};
    console.log(todos);
  }

}
