import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: Array<Object>;


  constructor() {
    this.todos = [
      {label: 'Course', priority: 3},
      {label: 'Achat', priority: 3},
      {label: 'Work', priority: 3}
    ];
  }

  ngOnInit() {
    console.log('on init TodosComponent');
  }

  ngOnDestroy() {
    console.log('on destroy TodosComponent');
  }

  setLabel(label: string): void {
    this.todos[0]['label'] = label;
  }
}
