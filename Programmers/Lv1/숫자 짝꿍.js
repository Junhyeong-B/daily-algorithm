/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.10ms, 33.4MB)
 *  테스트 2 〉	통과 (0.16ms, 33.4MB)
 *  테스트 3 〉	통과 (0.11ms, 33.4MB)
 *  테스트 4 〉	통과 (0.13ms, 33.4MB)
 *  테스트 5 〉	통과 (0.11ms, 33.5MB)
 *  테스트 6 〉	통과 (1.02ms, 33.8MB)
 *  테스트 7 〉	통과 (0.45ms, 33.6MB)
 *  테스트 8 〉	통과 (0.99ms, 33.6MB)
 *  테스트 9 〉	통과 (0.60ms, 33.5MB)
 *  테스트 10 〉	통과 (0.82ms, 33.7MB)
 *  테스트 11 〉	통과 (4091.14ms, 241MB)
 *  테스트 12 〉	통과 (3804.59ms, 241MB)
 *  테스트 13 〉	통과 (3411.54ms, 241MB)
 *  테스트 14 〉	통과 (3974.96ms, 241MB)
 *  테스트 15 〉	통과 (3054.51ms, 241MB)
 *  테스트 16 〉	통과 (0.09ms, 33.5MB)
 *  테스트 17 〉	통과 (0.09ms, 33.4MB)
 *  테스트 18 〉	통과 (0.08ms, 33.4MB)
 *  테스트 19 〉	통과 (0.08ms, 33.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */

/**
 * @param {string} X
 * @param {string} Y
 * @returns
 */

function solution(X, Y) {
  const map = {};

  for (const x of X) {
    if (x in map) {
      map[x] += 1;
    } else {
      map[x] = 1;
    }
  }

  const intersection = [];
  for (const y of Y) {
    if (y in map && map[y] > 0) {
      map[y] -= 1;
      intersection.push(y);
    }
  }

  if (intersection.length === 0) {
    return '-1';
  }

  if (intersection.filter((a) => a !== '0').length === 0) {
    return '0';
  }

  const sortedIntersection = intersection.sort((a, b) => {
    const ab = +(a + b);
    const ba = +(b + a);
    if (ab === ba) {
      return 0;
    } else if (ab < ba) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedIntersection.join('');
}
