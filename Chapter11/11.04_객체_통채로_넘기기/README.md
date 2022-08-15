## 11.4 객체 통채로 넘기기

```js
// before
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

if (aPlan.withinRange(low, high))
```

```js
// after
if (aPlan.withinRange(aRoom.daysTempRange))
```

### 배경
> 레코드를 통째로 넘기면 변화에 대응하기 쉽다.
- 주의: 레코드에 의존성이 강해질 수 있음