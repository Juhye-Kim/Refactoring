## 7.1 레코드 캡슐화하기

> 레코드를 데이터 클래스로 전환

```js
// before
organization = { name: "애크미 구스베리", country: "GB" };
```

```js
// after
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get country() {
    return this._country;
  }

  set country(arg) {
    this._country = arg;
  }
}
```

### 배경

> 레코드를 캡슐화하는 목적은, 변수 자체는 물론이고 내용을 조작하는 방식도 통제하기 위해서다.

- 단순한 데이터 레코드
  - 불변한 값이면 단순 레코드가 나을지도
  - 단점 : 계산해서 얻을 수 있는 값, 그렇지 않은 값을 구분해 저장해야함
  - ex. 범위 :`{start: 1, end: 5}`, `{start: 1, length: 5}`...
- 객체
  - 가변 데이터 일 때 선호
  - 어떻게 저장했는지는 숨긴 채, 여러 값들을 각각 메서드로 제공 가능
    - 저장된 값, 계산된 값이 무엇인지 사용자는 알 필요 X
  - 필드명을 바꿔도 기존이름, 새이름 모두 각각 메서드로 제공 가능
    - 점진적 수정 가능
- 레코드 구조
  1. 필드 이름 노출
  2. 필드 은닉, 원하는 이름 사용
  - ex. hash, map, hashmap, dictionary, 연관 배열 .. 등으로 주로 제공됨

### 절차

1. 레코드를 담은 변수를 캡슐화
2. 레코드를 감싼 단순한 클래스로 해당 변수 내용을 교체
   - 이 클래스에 원본 레코드를 반환하는 접근자 정의
   - 변수를 캡슐화하는 함수들이 이 접근자를 사용하도록 수정
3. 테스트
4. 원본 레코드 대신 새로 정의한 클래스 타입의 객체를 반환하는 함수를 새로 생성
5. 레코드를 반환하는 예전 함수를 사용하는 코드를 4에서 만든 새 함수를 사용하도록 수정
6. 클래스에서 원본 데이터를 반환하는 접근자와, 원본 레코드를 반환하는 함수들 제거
7. 테스트
8. 레코드 필드도 데이터 구조인 중첩구조라면, 레코드 캡슐화하기, 컬렉션 캡슐화하기 재귀적으로 적용

### 예제

- [간단한 레코드 캡슐화하기](./ex1.js)
- [중첩된 레코드 캡슐화하기](./ex2.js)
