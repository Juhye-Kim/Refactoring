class Account {
    // 은행 이자 계산
    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn < 0) result += this.type.overdraftCharge(this.daysOverdrawn);
        return result;
    }

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }
}

class AccountType {
    // 초과 인출 이자 계산
    overdraftCharge(daysOverdrawn) {
        if (this.type.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            }
            else {
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        } else {
            return daysOverdrawn * 1.75;
        }
    }    
}