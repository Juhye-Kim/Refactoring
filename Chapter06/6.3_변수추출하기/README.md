## 6.3 변수 추출하기

### 배경

> 표현식이 너무 복잡해서 이해하기 어려울 때는, 지역변수를 확용해 표현식을 쪼개 관리하자!

- 복잡한 로직을 구성하는 단계마다 이름 붙여서 코드 목적을 더 명확하게 드러내기!
- 이 과정에서 추가한 변수는 디버깅에도 도움된다.
  - 중단점 지정, 상태 출력 문장 추가 가능
- 현재 함수 안에서만 의미있다면, 변수 추출이 좋다.
- 넓은 문맥에서까지 의미있다면 통용되는 이름 생각해야함 (함수로 추출해야함)

### 절차

1. 추출하는 표현식의 side effect 확인
2. 불변변수 (const) 선언후, 표현식 대입
3. 교체
4. 테스트

### 예시 : 클래스 안에서

- 클래스 전체에 주는 경우는 변수가 아닌 메서드로 추출
- 객체는 특정 로직, 데이터를 '외부와 공유할 때', 공유할 정보를 설명해주는 문맥이 되어줌
  - 덩치 큰 클래스에서 공통 동작을 별도 이름으로 뽑아 추상화해두면, 객체를 다룰 때 쉽게 활용 가능해서 유용
  - `get` -> 외부와 공유, 클래스는 메서드를 설명해주는 문맥이 됨

```js
class Order {
  // ...
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
}
```
