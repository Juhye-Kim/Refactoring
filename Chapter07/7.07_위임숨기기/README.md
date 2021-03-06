### 7.7 위임 숨기기

```js
// before
manager = aPerson.department.manager;
```

```js
// after
manager = aPerson.manager;

class Person {
    get manager() {
        return this.department.manager;
    }
}
```

### 배경
> 캡슐화는 모듈들이 시스템의 다른 부분에 대해 알아야 할 내용을 줄여준다. <br/>
> 캡슐화가 잘 되어있다면 무언가 변경해야 할 때 함께 고려할 모듈 수가 적어져 코드를 변경하기 훨씬 쉬워진다.

- 위임 메서드
  - 클라이언트가 어떤 위임 객체의 메서드를 호출하려면, 해당 객체에 대한 정보를 알아야 한다.
  - 의존성을 없애려면, 위임 메서드를 만들어 위임 객체의 존재를 숨기면 된다.
  - 이 경우, 위임 객체가 수정되어도 클라이언트는 아무 영향을 받지 않는다. 

### 절차
1. 위임객체의 각 메서드에 해당하는 서버에 생성
2. 클라이언트가 위임객체가 아닌 서버를 호출하도록 수정
3. 서버로부터 위임객체를 얻는 접근자를 제거
4. test