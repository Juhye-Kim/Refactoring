class Site {
    get customer() {
        return this._customer;
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
}

function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg === "미확인 고객"))) {
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    }
    return (arg === "미확인 고객")
}

// client1
const aCustomer = site.customer;

let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// client2
const plan = (aCustomer === "미확인 고객") ? registry.billingPlans.basic : aCustomer.billingPlan;

// client3
if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;

// client4
const weeksDelinquent = (aCustomer === "미확인 고객") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;