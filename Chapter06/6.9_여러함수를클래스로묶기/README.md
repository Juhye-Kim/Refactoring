## 6.9 여러 함수를 클래스로 묶기

```js
// before
function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseCharge(aReading) {}

// after
class Reading {
  base() {}
  taxableCharge() {}
  calculateBaseCharge() {}
}
```

### 배경

- class -> 대다수의 최신 프로그래밍 언어가 제공하는 기본적인 빌딩 블록
  - 데이터, 함수를 하나의 공유 환경으로 묶음
  - 다른 프로그램 요소와 어우러지도록 일부를 외부에 제공
  - 객체지향 언어의 기본, 다른 패러다임에도 유용
- '공통 데이터'를 중심으로 엮음!
  - 함수들이 공유하는 공통 환경을 더 명확히 표현 가능
- 클래스 미지원 언어는, '함수를 객체처럼' 패턴으로 구현

### 절차

1. 함수들이 공유하는 공통 데이터 레코드를 캡슐화
2. 공통 레코드를 사용하는 함수를 각각 새 클래스로 이동 (함수 옮기기)
3. 데이터를 조작하는 로직들은 함수로 추출해 새 클래스로 이동
