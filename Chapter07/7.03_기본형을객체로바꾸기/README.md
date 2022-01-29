## 7.3 기본형을 객체로 바꾸기

```js
// before
orders.filter((o) => "high" === o.priority || "rush" === o.priority);
```

```js
// after
orders.filter((o) => o.priority.higherThan(new Priority("normal")));
```

### 배경

> 단순 출력 이상의 기능이 필요해지는 순간, 데이터를 표현하는 전용 클래스를 정의한다.

- 시작은 기본형 데이터를 단순히 감싼 것이지만, 프로그램이 커질수록 유용
- ex. 전화번호 문자열
  - formatting, 지역코드 추출 등의 동작 추가

### 절차

1. 변수 캡슐화
2. 단순한 값 클래스 만들기
   - 생성자 : 기존값을 인자로 받아 저장
   - getter : 이 값을 반환
3. setter 추가
   - 값 클래스의 인스턴스를 생성해 필드에 저장
4. getter 수정
   - 새로만든 클래스의 getter를 호출한 결과를 반환하도록
5. test
6. 원본 접근자의 동작을 더 잘드러나는 함수명 생각해보기
