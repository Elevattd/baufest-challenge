export default class UnsupportedOperationException extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
  }
}