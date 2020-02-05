import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CompletedRoute extends Route {
  @service todoData;

  async model() {
    let data = this.todoData;

    return {
      get todos() {
        return data.completed;
      }
    };
  }
}
