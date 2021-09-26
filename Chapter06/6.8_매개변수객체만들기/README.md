## 6.8 매개변수 객체 만들기

```js
// before
function amountInvoiced(startDate, endDate) {}
function amountReceived(startDate, endDate) {}
function amountOverdue(startDate, endDate) {}

// after
function amountInvoiced(aDateRange) {}
function amountReceived(aDateRange) {}
function amountOverdue(aDateRange) {}
```

### 배경

> 여기저기 몰려다니는 데이터 무리를 발견하면, 데이터 구조 하나로 모아준다.

- 데이터 뭉치를 데이터 구조로 묶으면, 데이터 사이 관계가 명확해진다.
- 매개변수 수도 줄어든다.
- 일관성도 높아진다.
  - 같은 데이터 구조를 사용하는 모든 함수가 항상 같은 이름을 사용하므로
- 이 데이터 구조를 활용하는 형태로 프로그램 동작 자체를 재구성할 수도 있다.
  - ex. 데이터에 공통으로 적용되는 동작을 추출해 함수로 만들기
    - 새로운 추상개념으로 만들고, 코드의 개념적인 그림을 다시 그려볼 수 있음!
