## 11.5 매개변수를 질의함수로 바꾸기

```js
// before
availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {}
```

```js
// after
availableVacation(anEmployee)

function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
}
```

### 배경
> 책임소재를 피호출자에게 넘기자
- 매개변수도 중복을 피하는게 좋고, 짧을수록 좋다.
- 피호출자 내에서 값을 사용할 수 있는 경우, 그렇게 함으로써 호출자의 역할을 간소화 하자.
- 주의: 피호출 함수에 의존성이 생기지 않길 원하는 경우 사용하지 말자.
- 주의: 함수에 같은 값을 입력하면 항상 같은 결과가 나오도록 해야 한다. (참조 투명)