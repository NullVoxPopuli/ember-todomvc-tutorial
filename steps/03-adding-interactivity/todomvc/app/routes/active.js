import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ActiveRoute extends Route {
  @service('todo-data') todos;

  model() {
    let todos = this.todos;

    return {
      get activeTodos() {
        return todos.incomplete;
      }
    };
  }
}
