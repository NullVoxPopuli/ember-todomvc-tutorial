import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('todo-data') todos;

  model() {
    let todos = this.todos;

    return {
      get allTodos() {
        return todos.all;
      }
    };
  }
}
