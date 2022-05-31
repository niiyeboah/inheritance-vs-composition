/* eslint-disable */
declare module '@vaadin/text-field/src/vaadin-text-field.js' {
  import { TextField as PrivateTextField } from '@vaadin/text-field';
  class TextField extends PrivateTextField {
    $: any;
    protected ready(): void;
    _setType(type: string): void;
  }
  export { TextField };
}
