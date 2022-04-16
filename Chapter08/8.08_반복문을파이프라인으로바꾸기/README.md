## 8.8 반복문을 파이프라인으로 바꾸기

```js
// before
const names = [];
for (const i of input) {
    if (i.job === "programmer") {
        names.push(i.name);
    }
}
```

```js
// after
const names = input.filter(i => i.job === "programmer").map(i => i.name);
```

### 배경
> 컬렉션 파이프라인을 이용하면 처리 과정을 일련의 연산으로 표현할 수 있다.

### 절차
1. 반복문에서 사용하는 컬렉션을 가리키는 변수 만들기
2. 반복문 첫 줄부터, 각 단위 행위를 적절한 컬렉션 파이프라인 연산으로 대체하기
3. 반복문 지우기