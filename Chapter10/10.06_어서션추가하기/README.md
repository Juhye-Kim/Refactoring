## 10.6 어서션 추가하기

```js
// before
if (this.discountRate) {
    base -= this.discountRate * base;
}
```

```js
// after
assert(this.discountRate >= 0) 

if (this.discountRate) {
    base -= this.discountRate * base;
}
```

### 배경
> 항상 참이라고 가정하는 조건부 문장
- 특정 조건이 참일 때만 제대로 동작하는 코드 영역에 적용
  - ex. 제곱근 구하는 함수 -> 양수만 동작
  - ex. 여러 필드 중 최소 하나엔 값이 있어야 동작하는 경우
- 이런 경우, 코드에 명시적으로 표시하기

### 절차
1. 참이라고 가정하는 조건이 보이면, 어서션을 추가한다.