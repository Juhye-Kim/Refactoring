function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
    return Math.min(...people.map(p => p.age));
}

function execute() {
    const youngest = youngestAge();
    const totalSalary = totalSalary();

    return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}