## 11.2 함수 매개변수화하기

```js
// before
function tenPercentRaise() {
    aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise() {
    aPerson.salary = aPerson.salary.multiply(1.05);
}
```

```js
// after
function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
}
```

### 배경
> 비슷한 로직이 있다면, 매개변수를 받아 처리하는 함수 하나로 합치자.

### 절차
1. 비슷한 함수 중 하나 선택
2. 함수 선언 바꾸기로 리터럴들을 매개변수로 추가
3. 함수를 호출하는 곳 모두에 적절한 리터럴 값 추가
4. test
5. 매개변수로 받은 값을 사용하도록 함수 본문 수정 (모든 곳에 적용)