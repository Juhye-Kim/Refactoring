## 9.5 값을 참조로 바꾸기

```js
// before
let customer = new Customer(customerData);
```

```js
// after
let customer = customerRepository.get(customerData.id);
```

### 배경
> 데이터를 여러 곳에서 참조하고, 갱신할 일이 많다면 데이터의 일관성을 위해 참조로 바꾸는 방법을 사용하기도 한다.
- 일종의 저장소
  - 각 엔티티를 표현하는 객체를 한 번만 만들고, 객체가 필요한 곳에서는 모두 이 저장소로부터 얻어쓰는 방식

### 절차
1. 같은 부류의 객체들을 보관할 저장소 만들기
2. 생성자에서 이 부류의 객체들 중 특정 객체를 찾는 방법이 있는지 확인
3. 호스트 객체의 생성자를 수정해 필요한 객체를 찾을 수 있게 하기
