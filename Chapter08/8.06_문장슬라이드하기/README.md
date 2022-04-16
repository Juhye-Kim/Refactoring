## 8.6 문장 슬라이드하기

```js
// before
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;
```

```js
// after
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;
```

### 배경
> 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다.
- 변수 선언
  - 변수를 처음 사용할 때 선언하기
- 함수 추출하기 준비단계로 많이 쓰임
- 조건문에서는 각 조건에서 중복되는 코드를 밖으로 빼기도 함

### 명령-질의 분리 원칙 (command-query separation principle)
> 질의형 함수를 작성할 때는 요청한 값을 리턴하기만 하고, 데이터에 상태를 바꾸는 일은 하지 않는다. 반대로 데이터의 상태를 변경하는 함수는 값을 리턴하는 일도 하지 말아야 한다. 코드를 최대한 명확하게 작성하려면 함수에서 값을 리턴하는 작업과 데이터의 상태를 변경하는 작업을 한 함수에서 동시에 처리해서는 안 된다.
- 함수 호출시 side effect로 예상치 못한 결과가 나오는 일을 방지하는 데 기초가 되는 원칙
- 함수는 성격에 따라 크게 두 가지로 분류할 수 있다. 
  1. 명령(command): 어떤 동작을 수행
  2. 질의(query): 답을 구함 

### 절차
1. 코드 조각을 이동할 목표 위치 찾기
2. 원래 위치에서 잘라내 목표 위치에 붙여넣기
3. test