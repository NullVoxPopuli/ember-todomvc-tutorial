import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service('todo-data') todos;

  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    let hasValue = Boolean(text);

    if (key === 'Enter' && hasValue) {
      this.todos.add(text);

      target.value = ''
    }
  }
}
