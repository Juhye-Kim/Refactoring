## 10.2 조건식 통합하기

```js
// before
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;
```

```js
// after
if (isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
    return (
        (anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime)
    )
}
```

### 배경
> 같은 일을 하는 조건들은 검사를 하나로 통합하자.
- and, or 연산자 활용
- 함수 추출로도 이어질 수 있다.
- 주의: 독립된 조건들이라면 통합해서는 안된다.

### 절차
1. 해당 조건식 모두 side effect가 없는지 확인
2. 조건문 2개를 선택해 논리 연산자로 결합
3. test
4. 조건이 하나 남을 때까지 반복
5. 함수로 추출할지 고민