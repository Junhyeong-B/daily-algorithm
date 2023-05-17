const isAllDiscount = (
  wantMap: Record<string, number>,
  discountMap: Record<string, number>
): boolean => {
  for (const [want, count] of Object.entries(wantMap)) {
    if (!discountMap[want] || discountMap[want] < count) {
      return false;
    }
  }

  return true;
};

function solution(want: string[], number: number[], discount: string[]) {
  const wantMap = want.reduce<Record<string, number>>((acc, cur, i) => {
    acc[cur] = number[i];
    return acc;
  }, {});

  const discountMap = {};
  for (let i = 0; i < 10; i++) {
    discountMap[discount[i]] = (discountMap[discount[i]] ?? 0) + 1;
  }

  let result = 0;

  if (isAllDiscount(wantMap, discountMap)) {
    result++;
  }

  let l = 0;
  for (let i = 10; i < discount.length; i++) {
    const removeOne = discount[l++];
    const addOne = discount[i];

    if (removeOne !== addOne) {
      discountMap[removeOne] -= 1;
      discountMap[addOne] = (discountMap[addOne] ?? 0) + 1;

      if (discountMap[removeOne] === 0) {
        delete discountMap[removeOne];
      }
    }
    if (isAllDiscount(wantMap, discountMap)) {
      result++;
    }
  }

  return result;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
); // 3

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (15.55ms, 38.7MB)
 *  테스트 2 〉	통과 (81.06ms, 41.5MB)
 *  테스트 3 〉	통과 (33.06ms, 39.1MB)
 *  테스트 4 〉	통과 (33.16ms, 39.9MB)
 *  테스트 5 〉	통과 (33.12ms, 40.2MB)
 *  테스트 6 〉	통과 (14.47ms, 38.3MB)
 *  테스트 7 〉	통과 (25.67ms, 38.8MB)
 *  테스트 8 〉	통과 (66.04ms, 43.1MB)
 *  테스트 9 〉	통과 (16.19ms, 38.9MB)
 *  테스트 10 〉통과 (40.40ms, 40.9MB)
 *  테스트 11 〉통과 (20.86ms, 38.8MB)
 *  테스트 12 〉통과 (0.12ms, 33.4MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
