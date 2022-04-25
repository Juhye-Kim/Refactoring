function discount(inputValue, quantity) {
    if (inputValue > 50) inputValue -= 2;
    if (quantity > 100) inputValue -= 1;

    return inputValue;
}