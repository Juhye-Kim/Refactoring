function getPayAmount(employee) {
    let result;

    if (employee.isSeparated) {
        result = {amount: 0, reasonCode: "SEP"};
    } else {
        if (employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"};
        } else {
            // 급여 계산 로직
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }

    return result;
}