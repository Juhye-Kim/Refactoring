## 10.4 조건문 로직을 다형성으로 바꾸기

```js
// before
switch (bird.type) {
    case '유럽 제비':
        return "보통이다";
    case '아프리카 제비':
        return (bird.numberOfCoCounts > 2) ? "지쳤다" : "보통이다";
    case '노르웨이 파랑 앵무':
        return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
    default:
        return "알 수 없다";
}
```

```js
// after
class EuropeanSwallow {
    get plumage() {
        return "보통이다";
    }
}

class AfricanSwallow {
    get plumage() {
        return (this.numberOfCoCounts > 2) ? "지쳤다" : "보통이다";
    }
}

class NorwegianBlueParrot {
    get plumage() {
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }
}
```

### 배경
> 클래스, 다형성을 이용해 조건부 로직을 직관적으로 구조화하기
- type을 기준으로 분기하는 switch문이 포함된 함수가 여러개 보이는 경우
  - **case별로 클래스를 하나씩 만들어** 공통 switch 로직의 중복을 없애자! 

### 절차
1. 다형적 동작을 표현하는 클래스들이 없다면 만들기
   - 이왕이면 적합한 인스턴스를 알아서 만들어 반환하는 factory 함수도 함께 생성
2. 호출하는 코드가 factory 함수를 사용하게 하기
3. 조건부 로직 함수를 super class로 옮기기
   - 조건부 로직이 온전한 함수로 분리되어 있지 않다면, 함수 추출부터!
4. 서브 클래스 중 하나를 선택하고, super 클래스의 조건부 로직 메서드를 override 하기
   - 선택된 서브클래스에 해당하는 조건절을 서브클래스 메서드로 복사하고 적절히 수정하기
5. 같은 방식으로 각 조건절을 서브클래스들에서 메서드로 구현
6. super 클래스 메서드에는 기본 동작만 남기기
   - super 클래스가 추상 클래스여야 하면, 이 메서드를 추상으로 선언하거나 하위에서 처리해야 함을 알리기(`throw Error()`)