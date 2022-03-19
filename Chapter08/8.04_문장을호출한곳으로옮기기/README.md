## 8.4 문장을 호출한 곳으로 옮기기

```js
// before
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>위치: ${photo.location}</p>\n`);
}
```

```js
// after
emitPhotoData(outStream, person.photo);
outStream.write(`<p>위치: ${person.photo.location}</p>\n`);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
}
```

### 배경
> 기능 범위가 달라지면 추상화의 경계도 움직인다. 초기엔 응집도 높고 한 가지 일만 수행하던 함수가 어느새 둘 이상의 다른 일을 수행하게 바뀔 수 있다는 뜻이다.
- 여러 곳에서 사용하던 기능이, 일부 호출자에겐 다르게 동작하도록 바뀌어야 한다면?
  - 달라진 동작을 호출자로 옮기기
  - 필요할 때마다 '독립적'으로 수정할 수 있도록!

### 절차
1. 단순한 상황이면, 피호출 함수 일부를 호출자로 복사해 넣기 (끝)
2. 복잡한 상황이면, 이동하지 않길 원하는 문장들을 다른 이름의 함수로 추출하기
3. 원래 함수 인라인
4. 추출된 함수 이름 변경