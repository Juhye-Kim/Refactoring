## 8.7 반복문 쪼개기

```js
// before
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
    averageAge += p.age;
    totalSalary += p.salary;
}
averageAge = averageAge / people.length; 
```

```js
// after
let totalSalary = 0;
for (const p of people) {
    totalSalary += p.salary;
}

let averageAge = 0;
for (const p of people) {
    averageAge += p.age;
}

averageAge = averageAge / people.length; 
```

### 배경
> 종종 반복문 하나에서 두 가지 일을 수행하는 모습을 본다. 그저 두 일을 한번에 처리할 수 있다는 이유에서 말이다.
- 각각의 반복문으로 수정하기
  - 리팩터링 != 최적화
- 서로 다른 일들이 한 함수에서 이뤄지고 있다는 신호일 수도 있다.

### 절차
1. 반복문을 복제해 두 개로 만든다.
2. 중복되어 생기는 side effect를 파악해 제거한다.
3. test
4. 각 반복문을 함수로 추출할지 고민해보기