## 9.4 참조를 값으로 바꾸기

```js
// before
class Product {
    applyDiscount(arg) {
        this._price.amount -= arg;
    }
}
```

```js
// after
class Product {
    applyDiscount(arg) {
        this._price = new Money(this._price.amount - arg, this._price.currency);
}
```

### 배경
> 필드를 값으로 다루면 내부 객체의 클래스를 수정해 값 객체(Value Object)로 만들 수 있다. 값 객체는 불변이기 때문에 다루기 더 쉽다.
- 참조: 내부 객체는 그대로 두고, 객체의 속성만 갱신
- 값: 새로운 속성을 담은 객체로 기존 객체를 통째로 대체

### 절차
1. 후보 클래스가 불변인지, 혹은 불변이 될 수 있는지 확인
2. 각 setter를 하나씩 제거
3. 이 값 객체의 필드를 사용하는 동치성(equality) 비교 메서드 생성