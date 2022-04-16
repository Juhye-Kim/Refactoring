## 8.5 인라인 코드를 함수 호출로 바꾸기

```js
// before
let appliesToMass = false;
for (const s of states) {
    if (s == "MA") appliesToMass = true;
}
```

```js
// after
appliesToMass = states.includes("MA");
```

### 배경
> 인라인 코드를 대체할 함수가 존재한다면 대체하기
- 함수 이름을 '코드의 동작 방식'이 잘 드러나게 정하고 함수를 사용하자
- 라이브러리가 제공하는 함수가 있다면 활용하자

### 절차
1. 인라인 코드를 함수 호출로 대체한다.
2. test