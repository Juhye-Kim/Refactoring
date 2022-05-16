## 10.3 중첩 조건문을 보호 구문으로 바꾸기

```js
// before
function getPayAmount() {
    let result;
    
    if (isDead) {
        result = deadAmount();
    } else {
        if (isSeparated) {
            result = separatedAmount();
        } else {
            if (isRetired) {
                result = retiredAmount();
            } else {
                result = normalPayAmount();
            }
        }
    }

    return result;
}
```

```js
// after
function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRetired) return retiredAmount();

    return normalPayAmount();
}
```

### 배경
> 보호 구문(guard clause): "이건 함수의 핵심이 아니다. 이 일이 일어나면 조치를 취하고 함수에서 빠져나와야 한다."
- 양쪽이 똑같이 중요한 경우에는 if-else 구조 사용

### 절차
1. 교체할 조건 중 가장 바깥 것을 보호구문으로 바꾸기
2. test
3. 반복
4. 모든 보호구문이 같은 결과를 반환하면, 보호구문들의 조건식을 통합