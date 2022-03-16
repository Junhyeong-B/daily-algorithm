{
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.10ms, 30MB)
      테스트 2 〉	통과 (0.23ms, 30.3MB)
      테스트 3 〉	통과 (6.61ms, 33.4MB)
      테스트 4 〉	통과 (28.92ms, 38.8MB)
      테스트 5 〉	통과 (26.42ms, 38.7MB)
      테스트 6 〉	통과 (27.38ms, 38.2MB)
      테스트 7 〉	통과 (28.12ms, 38.7MB)
      테스트 8 〉	통과 (30.14ms, 38.7MB)
      테스트 9 〉	통과 (0.14ms, 30.2MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (n, times) => {
    let minimumTimes = 0;
    let maximumTimes = Math.max(...times) * n;
    let answer = Infinity;

    while (minimumTimes <= maximumTimes) {
      let mid = Math.floor((minimumTimes + maximumTimes) / 2);
      let countPeople = 0;

      for (const time of times) {
        countPeople += Math.floor(mid / time);
      }

      if (countPeople >= n) {
        answer = Math.min(answer, mid);
        maximumTimes = mid - 1;
      } else {
        minimumTimes = mid + 1;
      }
    }

    return answer;
  };
}

{
  /* 첫 번째 시도 */
  /*
    정확성  테스트
      테스트 1 〉	실패 (0.13ms, 29.9MB)
      테스트 2 〉	실패 (0.24ms, 29.8MB)
      테스트 3 〉	실패 (7.59ms, 33.5MB)
      테스트 4 〉	실패 (52.78ms, 38.5MB)
      테스트 5 〉	실패 (42.19ms, 38.5MB)
      테스트 6 〉	실패 (55.66ms, 37.8MB)
      테스트 7 〉	실패 (38.97ms, 38.4MB)
      테스트 8 〉	실패 (80.11ms, 38.6MB)
      테스트 9 〉	실패 (0.18ms, 29.8MB)
    채점 결과
      정확성: 0.0
      합계: 0.0 / 100.0
  */

  const solution = (n, times) => {
    let minimumTimes = 0;
    let maximumTimes = Math.max(...times) * n;
    let answer = Infinity;

    while (minimumTimes <= maximumTimes) {
      let mid = Math.floor((minimumTimes + maximumTimes) / 2);
      let countPeople = 0;

      for (const time of times) {
        countPeople += Math.floor(mid / time);
      }

      if (countPeople > n) {
        maximumTimes = mid - 1;
      } else {
        minimumTimes = mid + 1;
      }

      if (countPeople === n) {
        /* 실패 이유:
          검사 받을 수 있는 사람이 꼭 n명일 필요는 없다. n명 이상 돼도 n명이 검사 받을 수 있기 때문.
          검사를 받을 수 있는 사람이 n명일 경우에만 answer 값을 비교하여 테스트 전부 실패.
         */
        answer = Math.min(answer, mid);
      }
    }

    return answer;
  };
}
