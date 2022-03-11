class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {return this._name;}
    set department(arg) {this._department = arg;}
    get manager() {this._department.manager;}
}

class Department {
    get chargeCode() {return this._chargeCode;}
    set chargeCode(arg) {this._chargeCode = arg;}
    get manager() {return this._manager;}
    set manager(arg) {this._manager = arg;}
}

// client
const aPerson = new Person('jooing');
// ...
const manager = aPerson.manager;