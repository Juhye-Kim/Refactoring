### 7.4 임시 변수를 질의 함수로 바꾸기

```js
// before
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) return basePrice * 0.95;
else return basePrice * 0.98;
```

```js
// after
get basePrice() {this._quantity * this._itemPrice;}

if (this.basePrice > 1000) return this.basePrice * 0.95;
else return this.basePrice * 0.98;
```

### 배경

- 임시변수 대신 함수 사용
  - 비슷한 계산을 수행하는 다른 함수에서도 사용 가능 (코드 중복 감소)
  - 클래스 내에 적용할 때 효과가 가장 큼!
- 여러차례 다시 대입이 필요한 경우 적용
- snapshot 용도의 변수에는 적용하면 안됨
  - 변수는 값을 한 번 계산하고, 그 뒤로는 읽기만 함
  - 함수는 값을 매번 계산

### 절차

1. 변수 사용 전, 값이 확실히 결정되는지, 매번 계산 로직이 다른 결과를 내지 않는지 확인
2. 변수들을 최대한 읽기전용으로 바꾸기
3. test
4. 변수 대입문을 함수로 추출
5. test
6. 변수 인라인하기 (임시 변수 제거)
