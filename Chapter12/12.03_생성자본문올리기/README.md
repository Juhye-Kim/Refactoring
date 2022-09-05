## 12.3 생성자 본문 올리기

```js
// before
class Party {}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();

        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}
```

```js
// after
class Party {
    constructor(name) {
        super();

        this._name = name;
    }  
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);

        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}
```

### 배경
- 너무 복잡하다면, 생성자를 팩터리 함수로 바꾸기 적용해보기