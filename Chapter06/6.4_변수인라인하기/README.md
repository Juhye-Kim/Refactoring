## 6.4 변수 인라인하기

### 배경

- 변수 = 함수 안에서 표현식을 가리키는 이름
- 원래 표현식과 다를 바 없을 때는 오히려 방해됨 -> 인라인하는게 낫다!

### 절차

1. 표현식 side effect 확인
2. 변수는 불변으로 선언하기 (const)
3. 교체
4. 테스트

```js
// before
let basePrice = anOrder.basePrice;
return basePrice > 1000;

// after
return anOrder.basePrice > 1000;
```
