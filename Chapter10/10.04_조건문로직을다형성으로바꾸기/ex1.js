/**
 * 새의 종에 따라 비행 속도, 깃털 상태를 알려주는 프로그램
 */
function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

/**
 * 깃털 상태
 * @param {object} bird 
 * @returns {string} plumage
 */
function plumage(bird) {
    return createBird(bird).plumage;
}

/**
 * 비행 속도
 * @param {object} bird 
 * @returns {number | null} speed 
 */
function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        return "알 수 없다";
    }

    get airSpeedVelocity() {
        return null;
    }
}

/**
 * 적합한 서브클래스 인스턴스를 만들어줄 factory 함수
 * @param {object} bird 
 * @returns {Bird}
 */
function createBird(bird) {
    switch (bird.type) {
        case '유럽 제비':
            return new EuropeanSwallow(bird);
        case '아프리카 제비':
            return new AfricanSwallow(bird);
        case '노르웨이 파랑 앵무':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "보통이다";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoCounts > 2) ? "지쳤다" : "보통이다";
    }

    get airSpeedVelocity() {
        return 40 - 2 * bird.numberOfCoCounts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }

    get airSpeedVelocity() {
        return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
    }
}