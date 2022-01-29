### 7.5 클래스 추출하기

```js
// before
class Person {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}
```

```js
// after
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
}

class TelephoneNumber {
  get areaCode {return this._areaCode;}
  get number {return this._number;}
}
```

### 배경

> 데이터, 메서드가 너무 많은 클래스는 이해하기 쉽지 않으니, 적절히 분리하는 것이 좋다.

- 클래스의 비대화, 복잡성 해결하기
- **클래스 분리 신호들**
  - 일부 데이터, 메서드를 따로 묶을 수 있다
  - 함께 변경되는 일이 많거나, 서로 의존하는 데이터들이 있다
  - 제거해도 다른 필드, 메서드에 문제가 없다

### 절차

1. 클래스 역할을 분리할 방법 결정
2. 분리될 역할을 담당할 클래스 만들기
3. 원래 클래스의 생성자에서 새 클래스 인스턴스 생성 + 필드에 저장
4. 필드 옮기기 (from 원래 클래스 to 새 클래스) + test
5. 함수 옮기기 (from 원래 클래스 to 새 클래스) + test
   - 저수준 메서드부터 ('호출 하기'보다는 '호출 당하는' 경우가 많은 메서드)
6. 양쪽 클래스에서 불필요한 메서드 제거
7. 클래스명 적절히 변경
8. 새 클래스를 외부로 노출할지 결정
