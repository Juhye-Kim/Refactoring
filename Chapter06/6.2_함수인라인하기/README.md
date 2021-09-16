## 6.2 함수 인라인하기

### 배경

> 함수 본문이 함수명만큼 명확한 경우, 함수를 제거한다.

- 잘못 추출된 함수들도 다시 인라인한다.
  - 원래 함수로 합치고, 필요에 따라 다른 형태로 다시 추출!
  - 간접 호출도 과하게 쓰면 별로..
  - 위임 관계가 복잡한 경우도 인라인해버리기!

```js
// before
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moorThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

// after
function getRating(driver) {
  driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
```

### 절차

1. 다형 메서드인지 확인

   - 서브클래스에서 오버라이드하는 메서드는 인라인하면 안되니까..!

2. 인라인할 함수 호출하는 곳 모두 찾기
3. 각 호출문을 함수 본문으로 교체

   - 교체할 때마다 테스트!

4. 원래함수는 제거
