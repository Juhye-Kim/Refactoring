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

// client
const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
