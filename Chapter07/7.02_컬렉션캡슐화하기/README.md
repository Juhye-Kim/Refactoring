## 7.1 레코드 캡슐화하기

```js
// before
class Person {
  get courses() {
    return this._course;
  }
  set course(aList) {
    this._courses = aList;
  }
}
```

```js
// after
class Person {
  get courses() {
    return this._course.slice(); // 복제본
  }
  addCourse(aCourse) {...}
  removeCourse(aCourse) {...}
}
```

### 배경

> 컬렉션 원소는 클래스 내부에서만 변경할 수 있도록 하기

- 컬렉션 캡슐화시, getter가 컬렉션 자체를 반환하면, 컬렉션의 원소들이 바뀔 위험 존재
  - 컬렉션은 항상 클래스를 통해서만 원소를 변경하도록 하기!
- 내부 컬렉션 직접 수정 방지
  - getter : 컬렉션 복제본 반환, 읽기 전용 proxy 반환
    - 방법은 뭘 하든 상관없지만, 코드 전반에서 일관성은 유지하기!
  - setter : add(), remove() 등 컬렉션 변경자 메서드 따로 만들기!

### 절차

1. 변수 캡슐화하기
2. 컬렉션에 원소를 추가, 제거하는 함수 추가
3. 컬렉션을 참조하는 부분 수정 + test
4. 컬렉션 getter 수정 + test
   - 읽기전용 proxy나 복제본 반환

### Javascript Error 객체 종류

- RangeError
  - 어떤 값이 집합에 없거나 허용되는 범위가 아닐 때 오류
- InternalError
  - JavaScript 엔진 내부에서 발생한 오류
- ReferenceError
  - 존재하지 않는 변수를 참조했을 때 발생하는 에러
- SyntaxError
  - 문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류
- TypeError
  - 일반적으로 값이 기대하던 자료형이 아니라서 연산을 할 수 없을 때 발생하는 오류
- URIError
  - 전역 URI 핸들링 함수가 잘못된 방식으로 사용되었을 때의 오류
