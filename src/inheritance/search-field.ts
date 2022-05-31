import { html, render } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TextField } from '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-lumo-styles';
import '@vaadin/icon';

@customElement('search-field')
export class SearchField extends TextField {
  ready() {
    super.ready();
    this._setType('search');
    render(html`<vaadin-icon icon="lumo:search" slot="suffix"></vaadin-icon>`, this);
  }
}
