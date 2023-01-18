{
  const solution = (
    cap: number,
    n: number,
    deliveries: number[],
    pickups: number[]
  ): number => {
    let deliverCount = deliveries.reduce((acc, cur) => acc + cur);
    let pickCount = pickups.reduce((acc, cur) => acc + cur);
    let deliverLastIndex = n - 1;
    let pickupLastIndex = n - 1;
    let totalDistance = 0;

    while (deliverCount > 0 || pickCount > 0) {
      let deliverBox = cap;
      let pickupBox = cap;
      let maxDeliverDistance = 0;
      let maxPickupDistance = 0;

      if (deliverCount > 0) {
        for (let i = deliverLastIndex; i >= 0; i--) {
          if (deliverBox === 0) {
            break;
          }

          if (deliveries[i] === 0) {
            continue;
          }

          const box = Math.min(deliveries[i], deliverBox);
          deliveries[i] -= box;
          deliverBox -= box;
          deliverCount -= box;
          maxDeliverDistance = Math.max(i + 1, maxDeliverDistance);
          deliverLastIndex = i;
        }
      }

      if (pickCount > 0) {
        for (let i = pickupLastIndex; i >= 0; i--) {
          if (pickupBox === 0) {
            break;
          }

          if (pickups[i] === 0) {
            continue;
          }

          const box = Math.min(pickups[i], pickupBox);
          pickups[i] -= box;
          pickupBox -= box;
          pickCount -= box;
          maxPickupDistance = Math.max(i + 1, maxPickupDistance);
          pickupLastIndex = i;
        }
      }

      totalDistance += Math.max(maxDeliverDistance, maxPickupDistance) * 2;
    }

    return totalDistance;
  };

  console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));

  /**
    정확성  테스트
      테스트 1 〉	  통과 (0.20ms, 33.5MB)
      테스트 2 〉	  통과 (0.10ms, 33.6MB)
      테스트 3 〉	  통과 (0.25ms, 33.5MB)
      테스트 4 〉	  통과 (0.30ms, 33.5MB)
      테스트 5 〉	  통과 (0.22ms, 33.6MB)
      테스트 6 〉	  통과 (0.29ms, 33.6MB)
      테스트 7 〉	  통과 (0.95ms, 33.5MB)
      테스트 8 〉	  통과 (0.93ms, 33.6MB)
      테스트 9 〉	  통과 (14.04ms, 37.1MB)
      테스트 10 〉	통과 (12.03ms, 37.2MB)
      테스트 11 〉	통과 (5.08ms, 36.9MB)
      테스트 12 〉	통과 (5.34ms, 37MB)
      테스트 13 〉	통과 (1.18ms, 33.7MB)
      테스트 14 〉	통과 (4.75ms, 36.9MB)
      테스트 15 〉	통과 (12.21ms, 38.9MB)
      테스트 16 〉	통과 (76.35ms, 42.4MB)
      테스트 17 〉	통과 (19.57ms, 41.8MB)
      테스트 18 〉	통과 (17.09ms, 39.5MB)
      테스트 19 〉	통과 (16.09ms, 39.4MB)
      테스트 20 〉	통과 (19.22ms, 39.5MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}
