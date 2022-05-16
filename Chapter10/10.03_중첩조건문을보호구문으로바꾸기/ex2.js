// 예시2: 조건 반대로 만들기
function adjustedCapital(anInstrument) {

    if (anInstrument.capital <= 0
        || anInstrument.interestRate <= 0 
        || anInstrument.duration <= 0) return 0;

    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;    
}