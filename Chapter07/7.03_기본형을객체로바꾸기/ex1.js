class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = aString;
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return this._value;
  }
}

// client
const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
