import {NOT_REPORTING, ValidationReporter} from 'src/validation-reporter';

describe('ValidationReporter', () => {
  let validationReporter;

  beforeEach(() => {
    validationReporter = new ValidationReporter();
  });

  describe('.renderErrors', () => {
    it('doesnt report by default', () => {
      let result = validationReporter.renderErrors([1,2]);
      expect(result).toEqual(NOT_REPORTING);
    });
  });
  describe('.unrenderErrors', () => {
    it('doesnt report by default', () => {
      let result = validationReporter.unrenderErrors([1,2]);
      expect(result).toEqual(NOT_REPORTING);
    });
  });
});
