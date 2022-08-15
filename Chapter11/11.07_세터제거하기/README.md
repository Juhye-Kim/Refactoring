## 11.7 세터 제거하기

```js
// before
class Person {
    get name() {}
    set name(arg) {}
}
```

```js
// after
class Person {
    get name() {}
}
```

### 배경
- setter가 존재한다 = 필드가 수정될 수 있다
- 객체 생성 이후에 값이 바뀌지 않길 원하는 경우 사용
  - constructor에서 값을 세팅하도록 하기