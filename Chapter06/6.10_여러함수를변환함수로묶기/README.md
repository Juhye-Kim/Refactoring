## 6.10 여러 함수를 변환 함수로 묶기

```js
// before
function base(aReading) {...}
function taxableCharge(aReading) {...}

// after
function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}
```

### 배경

> 도출작업을 한데 모아 검색, 갱신을 한곳에서 처리하고 중복도 막자!

- 데이터가 사용되는 곳마다, 같은 도출 작업이 반복되는 경우
  - 도출작업을 한데 모아 검색, 갱신을 한곳에서 처리하고 중복도 막기
- 변환 함수
  - 원본 데이터를 입력받아 필요한 정보를 모두 도출한 뒤, 각각을 출력 데이터 필드에 넣어 반환
  - 도출과정 검토시에도, 변환 함수만 살펴보면 됨!
- 클래스로 묶는게 나을 때 : 원본 데이터가 코드 내에서 갱신될 때
  - 변환함수로 묶으면 가공한 데이터를 새로 저장하기 때문에, 원본이 수정되면 일관성이 깨질 수 있음

### 절차

1. 변환함수 만들기 (변환할 레코드를 입력받아, 값을 그대로 반환하도록)
   - 깊은 복사로 처리하기
     - 변환함수가 원본을 바꾸지 않도록
2. 본문의 함수들을 변환함수로 옮기기
3. 클라이언트 코드가 새 필드를 사용하도록 수정
4. 테스트
