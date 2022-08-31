function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  let execTime = 0;
  const citiesWithLowerCase = cities.map((city) => city.toLowerCase());
  const queue = [];

  for (const city of citiesWithLowerCase) {
    const index = queue.indexOf(city);

    if (index === -1) {
      if (queue.length >= cacheSize) {
        queue.shift();
      }
      execTime += 5;
    } else {
      queue.splice(index, 1);
      execTime += 1;
    }

    queue.push(city);
  }

  return execTime;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.15ms, 30.1MB)
 *  테스트 2 〉	통과 (0.11ms, 30MB)
 *  테스트 3 〉	통과 (0.14ms, 30.1MB)
 *  테스트 4 〉	통과 (0.12ms, 30.1MB)
 *  테스트 5 〉	통과 (0.15ms, 30MB)
 *  테스트 6 〉	통과 (0.07ms, 29.7MB)
 *  테스트 7 〉	통과 (0.12ms, 29.8MB)
 *  테스트 8 〉	통과 (0.12ms, 30MB)
 *  테스트 9 〉	통과 (0.09ms, 30MB)
 *  테스트 10 〉통과 (0.11ms, 29.9MB)
 *  테스트 11 〉통과 (44.39ms, 41.9MB)
 *  테스트 12 〉통과 (0.12ms, 30.2MB)
 *  테스트 13 〉통과 (0.20ms, 29.9MB)
 *  테스트 14 〉통과 (0.18ms, 30.1MB)
 *  테스트 15 〉통과 (0.18ms, 30.1MB)
 *  테스트 16 〉통과 (0.20ms, 30.1MB)
 *  테스트 17 〉통과 (0.06ms, 30MB)
 *  테스트 18 〉통과 (0.32ms, 30.2MB)
 *  테스트 19 〉통과 (0.66ms, 29.8MB)
 *  테스트 20 〉통과 (0.40ms, 30.1MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
