class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

// client
const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
