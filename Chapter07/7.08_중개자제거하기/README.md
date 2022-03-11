### 7.8 중개자 제거하기

```js
// before
manager = aPerson.manager;

class Person {
    get manager() {
        return this.department.manager;
    }
}
```

```js
// after
manager = aPerson.department.manager;
```

### 배경
> 7.7의 위임 숨기기를 계속 하다보면, 한 클래스가 '그저 중개자' 역할로 전락할 수 있다. 이런 경우 차라리 클라이언트가 위임 객체를 직접 호출하는게 낫다.

- 시스템이 바뀌면 '적절하다'의 기준도 바뀌기 마련이다. 필요에 따라 위임 숨기기(7.7)와 중개자 제거(7.8)를 적절히 사용해 리팩토링하면 된다.

### 절차
1. 위임객체를 얻는 getter 생성
2. 위임객체를 호출하는 클라이언트가 이 getter를 거치도록 수정
3. 위임 메서드 삭제