### 7.9 알고리즘 교체하기

```js
// before
function foundPerson(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Don") return "Don";
        if (people[i] === "John") return "John";
        if (people[i] === "Kent") return "Kent";
    }
    return "";
}
```

```js
// after
function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(p => candidates.includes(p)) || "";
}
```

### 배경
> 더 쉽고 간결한 알고리즘을 발견했다면, 전체를 걷어내고 바꾼다.

- 이 작업을 하려면 메서드를 가능한 잘게 나눴는지 확인해야 한다. (알고리즘 간소화부터!)

### 절차
1. 교체할 코드를 함수 하나에 모으기
2. 이 함수의 동작을 검증하는 test 마련
3. 대체할 알고리즘 준비
4. 정적 검사 수행
5. 기존/새 알고리즘 결과 비교 test