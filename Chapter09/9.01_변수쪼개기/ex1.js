/**
 * 음식이 다른 지역으로 전파된 거리를 구하는 함수
 * @param {object} scenario 
 * @param {number} time 
 * @returns {number} 
 */
function distanceTravelled(scenario, time) {
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass;  // a = F/m  -> 첫번째 힘이 유발한 초기 가속도
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime;  // 전파된 거리
    let secondaryTime = time - scenario.delay;

    if (secondaryTime > 0) {  // 두번째 힘 반영해 다시 계산
        let primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;  // 두번째 힘까지 반영된 후의 가속도
        result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
    }

    return result;
}