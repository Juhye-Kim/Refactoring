## Chapter03. 코드에서 나는 악취

> 리팩터링을 언제 시작하고, 언제 그만할지를 판단하는 일은 작동원리를 아는 것 못지않게 중요하다.

- 냄새 = 리팩터링할 '시점'
- 숙련된 사람의 직관만큼 정확한 기준은 없다.

### 3.1 기이한 이름

- 함수, 모듈, 변수, 클래스...
- 이름만 보고도 역할과 사용방법을 명확히 알 수 있도록 신경써서 이름짓기

<br>

### 3.2 중복 코드

- 같은 코드 구조가 반복되면, 하나로 통합
- 관련 기법
  - 함수 추출하기
  - 문장 슬라이드하기
    - 비슷한 부분을 한 곳에 모으기
  - 메서드 올리기
    - 같은 부모로부터 파생된 서브클래스 코드가 중복되면, 부모로 옮기기

<br>

### 3.3 긴 함수

- 코드가 짧으면 이해하고, 공유하고, 선택하기 쉬워진다.
- 무엇을하는지 코드가 잘 설명하지 못할수록, 함수로 만드는게 유리하다!
  - TIP : 주석이 달린 곳을 함수로 빼내고, 함수명을 주석 내용을 토대로 짓기!
- 관련 기법
  - 함수 추출하기
  - 임시변수를 질의함수로 바꾸기
    - 임시변수 개수 줄이기
  - 매개변수 객체 만들기
  - 객체 통째로 넘기기
    - 매개변수 개수 줄이기
  - 함수를 명령으로 바꾸기
  - 조건문 분해하기
  - 반복문 쪼개기

<br>

### 3.4 긴 매개변수 목록

- 매개변수 줄이기
- 관련 기법
  - 매개변수를 질의함수로 바꾸기
  - 객체 통채로 넘기기
  - 매개변수 객체 만들기
  - 플래그 인수 제거하기
  - 여러함수를 클래스로 묶기

<br>

### 3.5 전역 데이터

- 전역 데이터의 문제점
  - 코드베이스 어디서든 건드릴 수 있음
  - 값을 누가바꿨는지 찾아내기 힘듦
- 관련 기법
  - 변수 캡슐화하기
    - 접근통제가 가능해짐
    - 접근범위 최소화시키기
      - 접근자 함수들을 클래스, 모듈에 넣고 안에서만 사용하게 만듦

<br>

### 3.6 가변 데이터

- 함수형 프로그래밍 : 불변 데이터
- 불변이 주는 장점
  - 무분별한 데이터 수정에 따른 위험 줄이기
- 관련 기법
  - 변수 캡슐화
    - 정해둔 함수를 거쳐야만 값을 수정할 수 있도록 만들기
  - 변수 쪼개기
    - 용도별로 독립변수에 저장
  - 문장 슬라이드, 함수 추출
    - 갱신 코드와 side effect없는 코드를 분리
  - 질의함수, 변경함수 분리
    - 꼭 필요한 경우가 아니면 side effect가 있는 코드를 호출할 수 없게함
  - 세터(setter) 제거하기
  - 여러함수를 클래스로 묶기, 여러함수를 변환함수로 묶기
    - 변수 갱신 코드의 유효범위 제한
  - 참조를 값으로 바꾸기
    - 내부필드 직접 수정X, 통채로 값 교체

<br>

### 3.7 뒤엉킨 변경

- 단일책임원칙(SRP)이 지켜지지 않을 때 발생
  - 한 모듈이 서로다른 이유로, 여러방식으로 변경됨
- _한 코드에 섞여 들어감 -> 맥락별 분리 필요_
- 관련 기법
  - 단계 쪼개기
  - 함수 옮기기
  - 함수, 클래스 추출하기

<br>

### 3.8 산탄총 수술

- 뒤엉킨 변경과 비슷한데 정반대
- _여러코드에 흩어짐 -> 맥략별로 수집 필요_
- 코드를 변경할 때마다 자잘하게 수정해야하는 클래스가 많은 상황
  - 변경할 부분이 코드 전반에 퍼져있음
- 관련 기법
  - 함수, 필드 옮기기
  - 여러함수를 클래스, 변환함수로 묶기
  - 단계 쪼개기
  - 함수, 클래스 인라인하기

<br>

### 3.9 기능 편애

> 모듈화할 때는, 영역 내 상호작용은 최대로, 영역 간 상호작용은 최소로 줄이는 데 주력한다.

- 어떤 함수가 자기가 속한 모듈의 함수, 데이터보다 다른 모듈의 함수, 데이터와 상호작용할 일이 더 많은 것
- 관련 기법
  - 함수 옮기기
  - 함수 추출하기

<br>

### 3.10 데이터 뭉치

- 데이터 항목 서너개가 여러 곳에서 함께 뭉쳐 다니는 모습을 자주본다면, 뭉쳐주기
- 관련 기법
  - 클래스 추출하기
  - 매개변수 객체 만들기, 객체 통째로 넘기기

<br>

### 3.11 기본형 집착

- 기본형 : 정수, 부동소수점 수, 문자열...
- 다른 데이터 타입도 활용하자~
- 관련 기법
  - 기본형 객체로 바꾸기
  - 타입코드를 서브클래스로 바꾸기
  - 조건부 로직을 다형성으로 바꾸기
  - 클래스 추출
  - 매개변수 객체 만들기

<br>

### 3.12 반복되는 switch문

- switch문은 모조리 `조건부 로직을 다형성으로 바꾸기`로 없애자!

<br>

### 3.13 반복문

- 관련기법
  - 반복문 파이프라인으로 바꾸기
    - filter, map 등의 파이프라인 연산 활용

<br>

### 3.14 성의 없는 요소

- 본문코드를 그대로 쓰는 것과 다를 것 없는 함수
- 실제론 메서드가 하나뿐인 클래스
- 관련 기법
  - 함수, 클래스 인라인하기
  - 게층 합치기

<br>

### 3.15 추측성 일반화

- 나중에 사용할 줄 알고, 당장 필요없는 것까지 작성해둔 것
- 관련 기법

  - 계층 합치기
    - 하는일이 거의 없는 추상클래스에 적용
  - 함수, 클래스 인라인하기
  - 함수 선언 바꾸기
  - 죽은코드 제거하기

<br>

### 3.16 임시 필드

- 특정 상황에서만 값이 설정되는 임시 필드를 가진 클래스
  - `이건 안쓰는 것 같은데 왜있지..?` 하고 고민하게 만듦
  - 코드 이해를 어렵게 만듦
- 관련 기법
  - 클래스 추출하기
  - 함수 옮기기
  - 특이 케이스 추가하기
    - 필드들이 유효하지 않는 상황을 위해 대안클래스 만들기

<br>

### 3.17 메시지 체인

- 다른 객체를 요청하는 작업이 연쇄적으로 이어지는 코드
  - ex. getSomething() 같은 게터가 꼬리에 꼬리를 문다..
  - 중간단계 수정하기 어려워짐
- 관련 기법
  - 위임 숨기기
  - 함수 추출하기, 함수 옮기기

<br>

### 3.18 중개자

- 관련 기법
  - 중개자 제거하기
    - 위임메서드 제거
  - 함수 인라인하기

<br>

### 3.19 내부자 거래

- 모듈 사이의 거래는 최소로 줄이고, 모두 투명하게 처리해야 한다.
- 관련 기법
  - 서브클래스, 슈퍼클래스를 위임으로 바꾸기

<br>

### 3.20 거대한 클래스

- 한 클래스가 너무 많은 일을 하지 않게 하자!
- 관련 기법
  - 클래스 추출하기
    - 필드 일부 따로 묶기
    - 슈퍼클래스 추출하기
    - 타입코드를 서브클래스로 바꾸기

<br>

### 3.21 서로 다른 인터페이스의 대안 클래스들

- 클래스의 장점은 필요에 따라 언제든 다른 클래스로 교체할 수 있다는 것
  - 단, 교체하려면 인터페이스가 같아야함
- 관련 기법
  - 함수 선언 바꾸기
    - 메서드 시그니처를 일치시키기
  - 함수 옮기기
    - 인터페이스가 같아지도록, 필요한 동작들을 클래스 안으로 밀어넣음
  - 슈퍼 클래스 추출하기
    - 대안 클래스 사이에 중복 코드가 생기는 경우

<br>

### 3.22 데이터 클래스

- 데이터 클래스
  - 데이터 필드와 게터/세터 메서드로만 구성된 클래스
  - 데이터 저장 용도로만 쓰임
- 관련 기법
  - 레코드 캡슐화하기
  - 세터 제거하기
    - 접근 원천 봉쇄
  - 함수 옮기기, 함수 추출하기
    - 다른 클래스에서 게터나 세터를 사용하는 메서드 찾아서 옮기기

<br>

### 3.23 상속 포기

- 서브클래스가 부모의 메서드, 속성을 원치 않을 때
- 관련 기법
  - 메서드 내리기, 필드 내리기
    - 물려받지 않을 부모코드를 모두 서브클래스들로 넘김
    - 모두에게 공통된 부분만 남도록!

<br>

### 3.24 주석

> 주석을 남겨야겠다는 생각이 들면, 가장 먼저 주석이 필요 없는 코드로 리팩토링해본다.

- 주석이 장황하게 달린 원인이, 코드를 잘못 작성했기 때문인 경우가 많다.
- 관련 기법
  - 함수 추출하기
  - 함수명 바꾸기
  - 어셔션 추가하기
    - 시스템 동작 선행조건 명시
