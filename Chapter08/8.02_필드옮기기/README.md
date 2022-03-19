## 8.2 필드 옮기기

```js
// before
class Customer {
    get plan() {return this._plan;}
    get discountRate() {return this._discountRate;}
}
```

```js
// after
class Customer {
    get plan() {return this._plan;}
    get discountRate() {return this.plan.discountRate;}
}
```

### 배경
> 프로그램의 진짜 힘은 '데이터 구조'에서 나온다.
- 문제에 적합한 데이터 구조를 활용하면, 동작 코드는 자연스럽게 단순하고 직관적으로 짜여진다.
  - 하지만 제대로 하기가 어렵다. 경험, 도메인 주도 설계 같은 기술로 능력을 기를 수 있다. 
  - 현재 데이터 구조가 부적절함을 깨달으면 바로 수정해야 한다.
- 함수에 항상 같이 건네지는 데이터 무리는 한 레코드에 담자.
  - 상호 관계가 명확히 드러나도록
  - 여러 구조체에 정의된 같은 필드들을 갱신하는 것 = 한 번만 갱신하는 곳으로 옮기라는 신호 

### 절차
1. 소스필드 캡슐화하기
2. test
3. 타깃 객체에 필드, 접근자, 메서드 생성
4. 정적 검사
5. 소스객체에서 타깃객체를 참조할 수 있는지 확인
6. 접근자들이 타깃필드를 사용하도록 수정
7. test
8. 소스필드 제거
9. test