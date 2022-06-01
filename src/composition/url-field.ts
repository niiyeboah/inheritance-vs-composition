import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { TextField } from '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/text-field';
import '@vaadin/icons';
import '@vaadin/icon';

@customElement('url-field')
export class UrlField extends LitElement {
  @property({ type: Object, attribute: true }) ariaTarget?: HTMLElement;
  @property({ type: String, attribute: true }) autocapitalize: 'on' | 'off' | 'none' | 'characters' | 'words' | 'sentences' = 'none';
  @property({ type: String, attribute: true }) autocomplete?: string;
  @property({ type: String, attribute: true }) autocorrect?: 'on' | 'off';
  @property({ type: Boolean, attribute: true }) autoselect = false;
  @property({ type: Boolean, attribute: 'clear-button-visible' }) clearButtonVisible = false;
  @property({ type: Boolean, attribute: true }) disabled = false;
  @property({ type: String, attribute: 'error-message' }) errorMessage?: string;
  @property({ type: String, attribute: 'helper-text' }) helperText = '';
  @property({ type: Boolean, attribute: true }) invalid = false;
  @property({ type: String, attribute: true }) label = '';
  @property({ type: Number, attribute: 'max-length' }) maxlength?: number;
  @property({ type: Number, attribute: 'min-length' }) minlength?: number;
  @property({ type: String, attribute: true }) name = '';
  @property({ type: String, attribute: true }) pattern = '^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$';
  @property({ type: String, attribute: true }) placeholder = '';
  @property({ type: Boolean, attribute: 'prevent-invalid-input' }) preventInvalidInput?: boolean;
  @property({ type: Boolean, attribute: true }) readonly = false;
  @property({ type: Boolean, attribute: true }) required = false;
  @property({ type: Object, attribute: 'state-target' }) stateTarget?: HTMLElement;
  @property({ type: String, attribute: true }) title = '';
  @property({ type: String, attribute: true }) value = '';
  @property({ type: String, attribute: true }) readonly theme?: string;
  @query('[part="input"]') inputElement?: TextField;
  readonly type = 'url';

  static get styles() {
    return css`
      [part='input'] {
        width: 100%;
      }
    `;
  }

  protected firstUpdated() {
    this.inputElement?._setType(this.type);
  }

  render() {
    return html`
      <vaadin-text-field
        part="input"
        .ariaTarget="${this.ariaTarget}"
        .autocapitalize="${this.autocapitalize}"
        .autocomplete="${this.autocomplete}"
        .autocorrect="${this.autocorrect}"
        .autoselect="${this.autoselect}"
        .clearButtonVisible="${this.clearButtonVisible}"
        .disabled="${this.disabled}"
        .errorMessage="${this.errorMessage}"
        .helperText="${this.helperText}"
        .invalid="${this.invalid}"
        .label="${this.label}"
        .maxlength="${this.maxlength}"
        .minlength="${this.minlength}"
        .name="${this.name}"
        .pattern="${this.pattern}"
        .placeholder="${this.placeholder}"
        .preventInvalidInput="${this.preventInvalidInput}"
        .readonly="${this.readonly}"
        .required="${this.required}"
        .stateTarget="${this.stateTarget}"
        .title="${this.title}"
        .value="${this.value}"
        .theme="${this.theme}"
      >
        <vaadin-icon icon="vaadin:link" slot="suffix"></vaadin-icon>
      </vaadin-text-field>
    `;
  }
}
