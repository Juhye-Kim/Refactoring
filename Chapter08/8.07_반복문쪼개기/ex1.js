function totalSalary() {
    let totalSalary = 0;

    for (const p of people) {
        totalSalary += p.salary;
    }

    return totalSalary;
}

function youngestAge() {
    let youngest = people[0] ? people[0].age : Infinity;

    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
    }

    return youngest;
}

function execute() {
    const youngest = youngestAge();
    const totalSalary = totalSalary();
    
    return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}