// 입력 매개변수 값을 수정할 때
function discount(originalInputValue, quantity) {
    let inputValue = originalInputValue;

    if (inputValue > 50) inputValue -= 2;
    if (quantity > 100) inputValue -= 1;

    return inputValue;
}