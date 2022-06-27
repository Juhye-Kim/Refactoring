## 11.1 질의함수와 변경함수 분리하기

```js
// before
function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result;
}
```

```js
// after
function totalOutstanding() {
    return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
    emailGateway.send(formatBill(customer));
}
```

### 배경
> 데이터를 갱신하는 함수, 조회만 하는 함수를 명확히 구분하자.

### 절차
1. 대상함수를 복제하고 질의 목적에 맞는 이름 짓기
2. 새 질의 함수에서 side effect 제거
3. 원래 함수를 호출하는 곳 수정
4. 원래 함수에서 질의 관련 코드 제거
5. test