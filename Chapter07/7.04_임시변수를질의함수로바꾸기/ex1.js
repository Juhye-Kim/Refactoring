class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantity * this._itemPrice;
  }

  get discountFactor() {
    const discountFactor = 0.98;

    if (this.basePrice > 1000) return discountFactor - 0.03;
    return discountFactor;
  }
}
