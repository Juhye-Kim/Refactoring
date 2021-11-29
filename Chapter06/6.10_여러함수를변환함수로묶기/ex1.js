// 매달 사용자가 마신 차의 양 측정(reading)

reading = { customer: "ivan", quantity: 10, month: 5, year: 2021 };

// client1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client3
const aReading = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// 파생 정보 계산 로직 한데 모으기
function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}
