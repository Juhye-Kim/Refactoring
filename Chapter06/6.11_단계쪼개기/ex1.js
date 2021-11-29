// 상품 결제 금액 계산
function priceOrder(product, quantity, shippingMethod) {
  // 상품정보를 이용해 상품가격 계산
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const priceData = { basePrice, quantity, discount }; // 중간 데이터 구조
  const price = applyShipping(priceData, shippingMethod);
  return price;
}

// 배송정보를 이용해 배송비 계산
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}
