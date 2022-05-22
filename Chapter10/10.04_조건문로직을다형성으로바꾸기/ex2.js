/**
 * 신용평가기관에서 선박의 항해 투자 등급을 계산하는 프로그램
 * - 위험요소(항해 경로의 자연조건, 선장의 항해 이력), 잠재 수익에 영향을 주는 다양한 요인을 기초로 항해 등급을 'A', 'B'로 구분
 */
 const voyage = {zone: "서인도"};
 const history = [
     {zone: "동인도", profit: 5},
     {zone: "서인도", profit: 15},
     {zone: "중국", profit: -2},
     {zone: "아프리카", profit: 7},
 ];

 const myRating = rating(voyage, history);

/**
 * 두 가지 요소를 종합해 항해의 최종 등급을 계산
 * - 위험 요소 : voyageRisk, captainHistoryRisk
 * - 잠재 수익 : voyageProfitFactor
 */
function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);

    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
}

/**
 * 항해경로 위험요소
 */
function voyageRisk(voyage) {
    let result = 1;

    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["중국", "동인도"].includes(voyage.zone)) result += 4;

    return Math.max(result, 0);
}

/**
 * 선장의 항해 이력 위험요소
 */
function captainHistoryRisk(voyage, history) {
    let result = 1;

    if (history.length < 5) result += 4;

    result += history.filter(v => v.profit < 0).length;

    if (voyage.zone === "중국" && hasChina(history)) result -= 2;

    return Math.max(result, 0);
}

/**
 * 중국 경유 여부
 */
function hasChina(history) {
    return history.some(v => "중국" === v.zone);
}

/**
 * 수익 요인
 */
function voyageProfitFactor(voyage, history) {
    let result = 2;
    
    if (voyage.zone === "중국") result += 1;
    if (voyage.zone === "동인도") result += 1;
    if (voyage.zone === "중국" && hasChina(history)) {
        result += 3;

        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result -= 1;
    } 
    else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result -= 1;
    }

    return result;
}
