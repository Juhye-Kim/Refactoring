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
 * @param {string} bird 
 * @returns {string} plumage
 */
function plumage(bird) {
    return new Bird(bird).plumage;
}

/**
 * 비행 속도
 * @param {string} bird 
 * @returns {number | null} speed 
 */
function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        switch (bird.type) {
            case '유럽 제비':
                return "보통이다";
            case '아프리카 제비':
                return (bird.numberOfCoCounts > 2) ? "지쳤다" : "보통이다";
            case '노르웨이 파랑 앵무':
                return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
            default:
                return "알 수 없다";
        }
    }

    get airSpeedVelocity() {
        switch (bird.type) {
            case '유럽 제비':
                return 35;
            case '아프리카 제비':
                return 40 - 2 * bird.numberOfCoCounts;
            case '노르웨이 파랑 앵무':
                return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default:
                return null;
        }
    }
}