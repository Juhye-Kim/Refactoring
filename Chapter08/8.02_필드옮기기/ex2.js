/**
 * 이자율(interest rate)을 계좌별로 설정
 */
class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
    }

    get interestRate() {
        return this._type.interestRate;
    }
}

class AccountType {
    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}