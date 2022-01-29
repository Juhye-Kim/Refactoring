class TrackingInformation {
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

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  constructor() {
    this._trackingInformation = new TrackingInformation();
  }

  get trackingInfo() {
    return this._trackingInformation.display;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

const aShipment = new Shipment();
aShipment.trackingInformation.shippingCompany = request.vendor;
