## 9.6 매직 리터럴 바꾸기

```js
// before
function potentialEnergy(mass, height) {
    return mass * 9.81 * height;
}
```

```js
// after
const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
    return mass * STANDARD_GRAVITY * height;
}
```

### 배경
> 매직 리터럴 = 소스 코드 여러 곳에(보통) 등장하는 일반적인 리터럴 값
- 상수, 코드 자체가 뜻을 분명하게 드러내도록 이름 짓기
- 과용 금지 (ex. `const ONE = 1`)
- 함수 호출로 바꾸는 방법도 있음 (ex. `aValue === MALE_GENDER` -> `isMale(aValue)`) 

### 절차
1. 상수 선언 후 매직 리터럴 대입
2. 해당 리터럴이 사용되는 곳 모두 찾기
3. 찾은 곳 모두에서 리터럴이 새 상수와 똑같은 의미로 쓰였는지 확인 후 대체

### 테스트
- 상수 값을 바꾸고, 관련 테스트 모두가 바뀐 값에 해당하는 결과를 내는지 확인해보기