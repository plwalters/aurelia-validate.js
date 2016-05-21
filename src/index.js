export {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from './decorators';
export {ValidationEngine} from './validation-engine';
import {Validator} from 'aurelia-validation';
import {Validator as ValidateJSValidator} from './validator';
export {Validator} from './validator';
import {ValidationReporter} from 'aurelia-validation';
import {ValidationReporter as ValidateJSReporter} from './validation-reporter';
export {ValidationReporter} from './validation-reporter';
import {ValidationRenderer} from './validation-renderer';
export {ValidationRenderer} from './validation-renderer';

class Config {
  constructor(container) {
    this.container = container;
  }
  setRenderer(renderer) {
    this.container.registerSingleton(ValidationRenderer, renderer);
  }
}

export function configure(aurelia, callback) {
  aurelia.container.registerHandler(Validator, ValidateJSValidator);
  aurelia.container.registerHandler(ValidationReporter, ValidateJSReporter);
  aurelia.globalResources('./validate-binding-behavior');
  let config = new Config(aurelia.container);

  if (typeof callback === 'function') {
    callback(config);
    return;
  }
}
