// GPS 추적 기록의 총 거리를 계산하는 함수
function trackSummary(points) {
    const totalTime = calculateTime(points);
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace
    }

    function distance(p1, p2) {}
    function radians(degrees) {}
    function calculateTime() {}
}

function top_calculateDistance(points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        result += distance(points[i-1], points[i]);
    }
    return result;
}