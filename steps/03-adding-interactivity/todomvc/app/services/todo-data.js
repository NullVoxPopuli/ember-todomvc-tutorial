import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}

export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }

  get incomplete() {
    return this.todos.filter(todo => {
      return todo.isCompleted === false;
    });
  }

  @action
  add(text) {
    let newTodo = new Todo(text);

    this.todos = [...this.todos, newTodo];
  }

  @action
  clearCompleted() {
    this.todos = this.incomplete;
  }
}
