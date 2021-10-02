// data
reading = { customer: "ivan", qauantity: 10, month: 5, year: 2017 };

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.qauantity;

// client 2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.qauantity;
const taxableCharge = Mathc.max(0, base - taxThreshold(aReading.year));

// client 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.qauantity;
}
