## 8.3 문장을 함수로 옮기기

```js
// before
result.push(`<p>제목: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return [
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
    ];
}
```

```js
// after
result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return [
        `<p>제목: ${aPhoto.title}</p>`,
        `<p>위치: ${aPhoto.location}</p>`,
        `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
    ];
}
```

### 배경
> '중복제거'는 코드를 건강하게 관리하는 가장 효과적인 방법 중 하나이다.
- 똑같은 코드가 앞 뒤에서 실행되는 모습을 보면, 반복되는 부분을 함수로 합치는 방법을 궁리하자.
  - 나중에 수정할 때도 한 곳만 수정하면 된다.
- 문장들을 함수로 옮기려면, 그 문장들이 피호출 함수의 일부라는 확신이 있어야 한다.
  - 일부는 아니지만 함께 호출되어야 한다면, 통채로 또 하나의 함수로 추출하자.

### 절차
1. 문장 슬라이드
    - 반복코드가 함수 호출부와 멀리 있다면 근처로 옮기자
2. 타깃함수를 호출하는 곳이 한 곳뿐이라면, 소스 위치에서 피호출 함수로 이동시키기
    - 이 경우에 해당하면 이제 끝!
3. 타깃함수를 호출하는 곳이 둘 이상이라면, 호출자 중 하나에서 '타깃함수 호출부와, 그 함수를 옮기려는 문장들을 함께' 다른 함수로 추출
4. 다른 호출자 모두 3에서 추출한 함수를 사용하도록 수정
5. 원래 함수를 새 함수 안으로 인라인한 후, 원래 함수는 제거