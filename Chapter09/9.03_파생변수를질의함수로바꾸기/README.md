## 9.3 파생 변수를 질의 함수로 바꾸기

```js
// before
get discountedTotal() {
    return this._discountedTotal;
}

set discount(aNumber) {
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old - aNumber;
}
```

```js
// after
get discountedTotal() {
    return this._baseTotal - this._discount;
}

set discount(aNumber) {
    this._discount = aNumber;
}
```

### 배경
> 골칫거리 가변 데이터의 유효 범위를 가능한 좁혀야 한다.
- 값을 쉽게 계산할 수 있는 변수는 모두 제거한다.
  - 오히려 이게 더 데이터의 의미를 분명히 드러내기도 한다.
  - 변형된 값을 실수로 결과 변수에 반영하지 않는 실수도 없애준다.
- 예외: 변형연산 (transformation operation)
  - 새로운 데이터 구조를 생성하는 경우
    1. 데이터 구조를 감싸며, 그 데이터에 기초해 계산한 결과를 속성으로 제공하는 객체
    2. 데이터 구조를 받아 다른 데이터 구조로 변환해 반환하는 함수


### 절차
1. 변수값이 갱신되는 지점을 모두 찾고, 필요에 따라 해당 지점에서 변수를 분리하기
2. 해당 변수값을 계산하는 함수 만들기
3. 해당 변수가 사용되는 모든곳에 assertion 추가해 함수 계산 결과와 변수값이 같은지 확인
4. test
5. 변수를 사용하는 코드를 모두 함수 호출로 대체
6. test
7. 변수를 선언하고 갱신하는 코드를 없애기 (죽은 코드 제거하기)