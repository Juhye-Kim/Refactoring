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

 const myRating = createRating(voyage, history).value;

 class Rating {
    constructor(voyage, history) {
        this._voyage = voyage;
        this._history = history;
    }

    /**
     * 두 가지 요소를 종합해 항해의 최종 등급을 계산
     * - 위험 요소 : voyageRisk, captainHistoryRisk
     * - 잠재 수익 : voyageProfitFactor
     */
    get value() {
        const vpf = voyageProfitFactor(voyage, history);
        const vr = voyageRisk(voyage);
        const chr = captainHistoryRisk(voyage, history);
    
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    /**
     * 항해경로 위험요소
     */
    get voyageRisk() {
        let result = 1;

        if (this._voyage.length > 4) result += 2;
        if (this._voyage.length > 8) result += this._voyage.length - 8;
        if (["중국", "동인도"].includes(this._voyage.zone)) result += 4;

        return Math.max(result, 0);
    }

    /**
     * 선장의 항해 이력 위험요소
     */
    get captainHistoryRisk() {
        let result = 1;

        if (this._history.length < 5) result += 4;

        result += this._history.filter(v => v.profit < 0).length;

        return Math.max(result, 0);
    }

    /**
     * 중국 경유 여부
     */
    get hasChinaHistory() {
        return this._history.some(v => "중국" === v.zone);
    }

    /**
     * 수익 요인
     */
    get voyageProfitFactor() {
        let result = 2;
        
        if (this._voyage.zone === "중국") result += 1;
        if (this._voyage.zone === "동인도") result += 1;
        if (this._voyage.zone === "중국" && this.hasChinaHistory) {
            result += 3;

            if (this._this._history.length > 10) result += 1;
            if (this._voyage.length > 12) result += 1;
            if (this._voyage.length > 18) result -= 1;
        } 
        else {
            if (this._this._history.length > 8) result += 1;
            if (this._voyage.length > 14) result -= 1;
        }

        return result;
    }
 }

class ExperiencedChinaRating extends Rating {
    /**
     * 선장의 항해 이력 위험요소
     */
     get captainHistoryRisk() {
        const result = super.captainHistoryRisk - 2;

        return Math.max(result, 0);
    }
}

function createRating(voyage, history) {
    if (voyage.zone === "중국" && history.some(v => "중국" === v.zone)) {
        return new ExperiencedChinaRating(voyage, history);
    } else {
        return new Rating(voyage, history);
    }
}