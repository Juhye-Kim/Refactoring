/**
 * 이자율(interest rate)을 계좌별로 설정
 */
class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}

class AccountType {
    constructor(nameString) {
        this._name = nameString;
    }
}