## 12.2 필드 올리기

```java
// before
class Employee {}

class Salesperson extends Employee {
    private String name;
}

class Engineer extends Employee {
    private String name;
}
```

```js
// after
class Employee {
    private String name;
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
```

### 배경
> 서브클래스의 필드를 슈퍼클래스로 옮겨 중복을 없애자