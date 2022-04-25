## 9.1 변수 쪼개기

```js
// before
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);
```

```js
// after
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);
```

### 배경
> 역할이 둘 이상인 변수가 있다면 쪼개야 한다.
- 여러 용도로 쓰이는 변수는 혼란을 준다.

### 절차
1. 변수를 선언, 초기화하는 곳의 변수명 바꾸기 (가능하면 immutable로 선언)
2. 두번째로 값을 대입하는 곳 앞까지 새 변수명으로 모두 바꾸기
3. 두번째 대입시 변수를 원래 이름으로 다시 선언
4. test
5. 반복 (~ 마지막 대입하는 곳까지)