## 11.6 질의함수를 매개변수로 바꾸기

```js
// before
targetTemperature(aPlan);

function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
    // ...
}
```

```js
// after
targetTemperature(aPlan, thermostat.currentTemperature);

function targetTemperature(aPlan, currentTemperature) {
    // ...
}
```

### 배경
> 책임소재를 호출자에게 넘기자
- 전역변수를 참조하거나, 제거하려는 원소를 참조하는 경우 (함수 안에 두고 싶지 않을 때)
- 함수가 특정 변수에 의존하지 않게 하고 싶을 때