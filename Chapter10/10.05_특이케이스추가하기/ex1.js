class Site {
    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get name() {
        return this._name;
    }

    get billingPlan() {
        return this._billingPlan;  // 요금제
    }

    set billingPlan(args) {
        this._billingPlan = args;
    }

    get paymentHistory() {
        return this._paymentHistory;  // 납부 이력
    }

    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }

    get name() {
        return "거주자";
    }

    get billingPlan() {
        return registry.billingPlans.basic;
    }

    set billingPlan(arg) {
        // 무시
    }

    get paymentHistory() {
        return new NullPaymentHistory();
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
        return 0;
    }
}

function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    }
    return arg.isUnknown;
}

// client1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// client2
const plan = aCustomer.billingPlan;

// client3
aCustomer.billingPlan = newPlan;

// client4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;