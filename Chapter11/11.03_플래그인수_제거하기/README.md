## 11.3 플래그 인수 제거하기

```js
// before
function setDimension(name, value) {
    if (name === "height") {
        this._height = value;
        return;
    }
    if (name === "width") {
        this._width = value;
        return;
    }
}
```

```js
// after
function setHeight(value) {this._height = value};
function setWidth(value) {this._width = value};
```

### 배경
> 플래그 인수 = 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 필요한 인수
- 호출부에서도 알기 쉽게 하자!