## 10.7 제어 플래그를 탈출문으로 바꾸기

```js
// before
for (const p of people) {
    if (!found) {
        if (p === "조커") {
            sendAlert();
            fount = true;
        }
    }
}
```

```js
// after
for (const p of people) {
    if (p === "조커") {
        sendAlert();
        break;
    }
}
```

### 배경
> 제어 플래그: 코드 동작을 변경하는 데 사용하는 변수
- 주 서식지: 반복문 내부
- 복잡하게 작성된 코드에서 흔히 나타남

### 절차
1. 제어 플래그를 사용하는 코드를 함수로 추출할지 고려
2. 제어 플래그 갱신 코드 -> 각각 제어문으로 바꾸기
3. 제어 플래그 제거