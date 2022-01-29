### 7.6 클래스 인라인하기

```js
// before
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }

  get number() {
    return this._number;
  }
}
```

```js
// after
class Person {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}
```

### 배경

> 더 이상 제 역할을 못해서 그대로 두면 안되는 클래스는 인라인해버린다.

- case1. 특정 클래스에 남은 역할이 거의 없을 때
- case2. 두 클래스의 기능을 지금과 다르게 배분하고 싶을 때
  - 하나로 합친 다음에, 다른 방식으로 추출

### 절차

1. 소스 클래스의 각 public 메서드에 대응하는 메스드들을 타깃 클래스에 생성
   - 메서드들은 단순히 원래 클래스로 위임하는 역할
2. 소스 클래스 메서드를 사용하는 부분을, 타깃 클래스 메서드로 바꾸기
3. 소스 클래서의 메서드, 필드를 모두 타깃 클래스로 이동시키기
4. 소스 클래스 삭제 + 조의 표하기..
