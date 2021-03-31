import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = '';

  todos: any[] = [];

  addTodo(){
    if(this.todo != ""){
      this.todos = [...this.todos, this.todo];  //Spread operator
      this.todo = "";
    }else{
      alert("Introduce algun texto");
    }

  }

  deleteTodo(todoToDelete) {
    this.todos = this.todos.filter(todo => todo !=todoToDelete);
  }
}
