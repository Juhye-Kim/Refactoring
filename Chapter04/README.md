## Chapter04. 테스트 구축하기

### 자가 테스트 코드의 가치

- `강력한 버그 검출 도구`
  - 디버깅 시간을 줄여줌

### TDD (테스트 주도 개발)

- `테스트 - 코딩 - 리팩터링` 과정을 짧은 주기로 반복
- 테스트를 먼저 작성하고, 테스트를 통과하게끔 코드를 작성

### 테스트 추가하기

> 완벽하게 만드느라 테스트를 수행하지 못하느니, 불완전한 테스트라도 작성해 실행하는 게 낫다.
> 

```jsx
describe('province', () => {
  it('shortfall', () => {
		const asia = new Province(sampleProvinceData());
		expect(asia.shortfall).equal(5);
	});

	it('profit', () => {
		const asia = new Province(sampleProvinceData());
		expect(asia.profit).equal(230);
	})
})
```

> 테스트 코드에서도 중복은 의심해야 한다.
> 
- bad
    
    ```jsx
    describe('province', () => {
    	const asia = new Province(sampleProvinceData());
    
      it('shortfall', () => {
    		expect(asia.shortfall).equal(5);
    	});
    
    	it('profit', () => {
    		expect(asia.profit).equal(230);
    	})
    })
    ```
    
    - 테스트끼리 상호작용하게 하는 공유 픽스처를 생성해서는 안된다.
    - 다른 테스트에서 이 공유 객체 값을 수정하면, 이 픽스처를 사용하는 또 다른 테스트가 실패할 수 있다.
        - 테스트 결과가 제멋대로 되어, 버그잡기 어려워질 수 있음

- good
    
    ```jsx
    describe('province', () => {
    	let asia;
    	beforeEach(() => {
    		asia = new Province(sampleProvinceData());
    	})
    
      it('shortfall', () => {
    		expect(asia.shortfall).equal(5);
    	});
    
    	it('profit', () => {
    		expect(asia.profit).equal(230);
    	})
    })
    ```
    
    - beforeEach구문 활용해서, 각 테스트 바로 전에 초기화시키기
        - 모든 테스트가 자신민의 새로운 asia를 사용하도록해서, 독립적으로 구성하기
        - 결과 예측이 쉬워진다!
    - it 블록에 각각 코드를 넣지 않는 이유
        - 테스트들이 모두 똑같은 픽스처에 기초해 검증을 수행하는걸 좀 더 보장할 수 있음
            - 같은 '기준 데이터'로 테스트
        - 한군데서 코드를 관리하기에도 더 좋음

<br>

### 경계 조건 검사하기

> 문제가 생길 가능성이 있는 '경계조건'을 생각해보고, 그 부분을 집중적으로 테스트하자.
> 
- 경계를 확인하는 테스트를 작성해보면, 프로그램에서 이런 특이 상황을 어떻게 처리하는 게 좋을지 생각해 볼 수 있음
- 최대한 모든 경우를 테스트하려고 노력하되, 위험한 부분에 먼저 집중하고, 리팩터링하는 동안에도 계속 추가하며 진행하자.
