// GPS 추적 기록의 총 거리를 계산하는 함수
function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time: totalTime,
        distance: totalDistance,
        pace
    }

    function calculateDistance() {
        let result = 0;
        for (let i = 0; i < points.length; i++) {
            result += distance(points[i-1], points[i]);
        }
        return result;
    }

    function distance(p1, p2) {}
    function radians(degrees) {}
    function calculateTime() {}
}