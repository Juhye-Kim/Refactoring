class Shipment {
  constructor() {
    this._shippingCompany = "";
    this._trackingNumber = "";
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;
