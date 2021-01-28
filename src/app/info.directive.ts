import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {

  constructor() { }

}
