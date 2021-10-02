// data
reading = { customer: "ivan", qauantity: 10, month: 5, year: 2017 };

// client 1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// client 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

// client 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// 캡슐화
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.qauantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get qauantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  // 기본 요금 계산 함수
  get baseCharge() {
    return baseRate(this.month, this.year) * this.qauantity;
  }

  get taxableCharge() {
    return Mathc.max(0, this.baseCharge - taxThreshold(this.year));
  }
}
