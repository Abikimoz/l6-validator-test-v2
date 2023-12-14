export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  hasSpaces() {
    const validator = (value) => value.includes(' ');
    return new StringSchema([validator]);
  }
}
