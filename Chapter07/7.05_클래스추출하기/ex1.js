class Person {
  constructor(name) {
    this._name = name;
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.officeAreaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.officeNumber;
  }

  set officeNumber(arg) {
    this._telephoneNumber.officeNumber = arg;
  }
}

class TelephoneNumber {
  toString() {
    return `${this.areaCode} ${this.number}`;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }
}
