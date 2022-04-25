// 입력 매개변수 값을 수정할 때
function discount(originalInputValue, quantity) {
    let result = originalInputValue;

    if (inputValue > 50) result -= 2;
    if (quantity > 100) result -= 1;

    return result;
}