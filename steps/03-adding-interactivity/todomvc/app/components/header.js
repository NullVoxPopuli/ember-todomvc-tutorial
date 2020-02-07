import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    let hasValue = Boolean(text);

    if (key === 'Enter' && hasValue) {
      alert(text);

      target.value = ''
    }
  }
}
