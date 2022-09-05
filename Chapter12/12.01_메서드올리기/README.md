## 12.1 메서드 올리기

```js
// before
class Employee {}

class Salesperson extends Employee {
    get name() {}
}

class Engineer extends Employee {
    get name() {}
}
```

```js
// after
class Employee {
    get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
```

### 배경
> 서브클래스의 메서드를 슈퍼클래스로 옮기자
- 해당 메서드에서 참조하는 필드들이 서브클래스에만 있는 경우
- 템플릿 메서드 패턴: 두 메서드의 전체 흐름은 비슷하지만, 세부 내용이 다른 경우 적용해보기 
