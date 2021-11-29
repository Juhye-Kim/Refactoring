// 매달 사용자가 마신 차의 양 측정(reading)

reading = { customer: "ivan", quantity: 10, month: 5, year: 2021 };

// client1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// client2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);

// client3
const rawReading = acquireReading(); // 미가공 측정값
const aReading = enrichReading(rawReading);
const baseChargeAmount = aReading.baseCharge;

// 변환 함수
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}
