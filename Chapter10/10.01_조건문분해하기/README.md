## 10.1 조건문 분해하기

```js
// before
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate;
} else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
```

```js
// after
if (summer()) {
    charge = summerCharge();
} else {
    charge = regularCharge();
}
```

### 배경
> 거대한 코드 블럭이 있으면, 분해해서 각 덩어리에 의도를 살린 이름을 붙여주자.
- 다양한 조건, 동작 때문에 긴 함수가 탄생하고 알아보기 어려워진다.
- 분기의 의도와 무엇을 분기했는지 명확히 드러내자!

### 절차
1. 조건식과 조건절을 각각 함수로 추출