## 6.11 단계 쪼개기

```js
// before
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

// after
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);
  return {
    productID: values[0].split("-")[1],
    quantity: parseInt(values[1]),
  };
}

function price(order, priceList) {
  return order.quantity * priceList[order.productID];
}
```

### 배경

> 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면, 각각을 별개 모듈로 나누는 방법을 모색한다.

- 모듈이 잘 분리되어있다면, 다른 모듈의 상세내용을 몰라도 수정할 수 있다.
- 동작을 연이은 두 단계로 쪼개기
  - 각 단계는 확연히 다른 일을 수행하도록!
- ex. 컴파일러
  - 토큰화, 파싱(구문트리 생성), 구문트리변환(최적화 등), 목적 코드 생성

### 절차

1. 두번째 단계에 해당하는 코드를 함수로 추출
2. (테스트)
3. 중간데이터 구조를 만들어, 1에서 추출한 함수 인자로 추가
4. (테스트)
5. 1에서 추출한 함수의 매개변수를 하나씩 검토
   - 첫 단계에서 사용되는건 중간 데이터 구조로 옮김
6. 첫 단계 코드를 함수로 추출
   - 중간 데이터 구조를 반환하는 함수
