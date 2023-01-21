{
  /**
   * 풀이 1번
   * 배열 A, 배열 B 각각의 최대 공약수 및 최대 공약수의 약수들을 배열에 담음.
   * 배열 A의 약수들은 배열 B만 순회, 배열 B의 약수들은 배열 A만 순회하면서 전부 나누어지지 않는 값인지 확인
   * 조건을 만족하는 최대 값을 반환.
   * 테스트 케이스 몇개 실패.. 이유는 아직 파악되지 않음.
   */
  /**
    정확성  테스트
      테스트 1 〉	실패 (0.80ms, 35.2MB)
      테스트 2 〉	실패 (1.58ms, 35.6MB)
      테스트 3 〉	실패 (0.56ms, 33.5MB)
      테스트 4 〉	실패 (14.63ms, 38.8MB)
      테스트 5 〉	통과 (2.62ms, 35.8MB)
      테스트 6 〉	통과 (6.03ms, 36.6MB)
      테스트 7 〉	통과 (1.12ms, 35.4MB)
      테스트 8 〉	통과 (1.16ms, 35.4MB)
      테스트 9 〉	통과 (2.61ms, 35.8MB)
      테스트 10 〉	통과 (0.38ms, 33.5MB)
      테스트 11 〉	통과 (25.13ms, 79.1MB)
      테스트 12 〉	통과 (29.35ms, 79MB)
      테스트 13 〉	통과 (26.90ms, 79.1MB)
      테스트 14 〉	통과 (26.62ms, 79MB)
      테스트 15 〉	통과 (28.23ms, 79.1MB)
      테스트 16 〉	통과 (27.13ms, 79.1MB)
      테스트 17 〉	통과 (22.61ms, 79MB)
      테스트 18 〉	실패 (29.28ms, 79MB)
      테스트 19 〉	통과 (0.13ms, 33.5MB)
      테스트 20 〉	통과 (0.22ms, 33.4MB)
      테스트 21 〉	통과 (0.22ms, 33.4MB)
      테스트 22 〉	통과 (0.15ms, 33.4MB)
      테스트 23 〉	실패 (0.23ms, 33.4MB)
      테스트 24 〉	통과 (0.24ms, 33.5MB)
      테스트 25 〉	통과 (0.25ms, 33.4MB)
      테스트 26 〉	실패 (0.26ms, 33.5MB)
      테스트 27 〉	통과 (0.30ms, 33.5MB)
      테스트 28 〉	실패 (0.29ms, 33.5MB)
      테스트 29 〉	통과 (0.21ms, 33.5MB)
      테스트 30 〉	통과 (0.31ms, 33.5MB)
      테스트 31 〉	통과 (0.23ms, 33.4MB)
      테스트 32 〉	통과 (0.25ms, 33.4MB)
      테스트 33 〉	통과 (0.23ms, 33.4MB)
      테스트 34 〉	실패 (0.32ms, 33.4MB)
      테스트 35 〉	통과 (0.24ms, 33.5MB)
      테스트 36 〉	실패 (0.27ms, 33.4MB)
    채점 결과
      정확성: 72.2
      합계: 72.2 / 100.0
   */
  const getGCD = (num1: number, num2: number): number => {
    let a = num1;
    let b = num2;
    let r: number;
    while (b !== 0) {
      r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  const getGCDFromArray = (nums: number[]): number => {
    if (nums.length === 0) {
      return 0;
    }

    if (nums.length === 1) {
      return nums[0];
    }

    let gcd = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      gcd = nums[i];
      gcd = getGCD(gcd, nums[i + 1]);
    }

    return gcd;
  };

  const getCombination = (num: number): number[] => {
    const factors: number[] = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);

        if (num / i !== i) {
          factors.push(num / i);
        }
      }
    }
    return factors.sort((a, b) => b - a);
  };

  const canDivide = (nums: number[], factor: number): boolean => {
    return nums.some((num) => num % factor === 0);
  };

  const getMaxValueFromNonDivisibleNumbers = (
    arr: number[],
    factors: number[]
  ): number => {
    for (const factor of factors) {
      if (!canDivide(arr, factor)) {
        return factor;
      }
    }
    return 0;
  };

  const solution = (arrayA: number[], arrayB: number[]): number => {
    const GCDA = getGCDFromArray(arrayA);
    const GCDB = getGCDFromArray(arrayB);
    const combinationA = getCombination(GCDA);
    const combinationB = getCombination(GCDB);

    return Math.max(
      getMaxValueFromNonDivisibleNumbers(arrayA, combinationB),
      getMaxValueFromNonDivisibleNumbers(arrayB, combinationA)
    );
  };
}

{
  /**
   * 풀이 2번
   * 배열 A, 배열 B 최솟값을 구한다.
   * 그 값에서 1씩 감소하며 한 쪽은 다 나눠지고, 한 쪽은 다 안나눠지는지 확인한다.
   * 이렇게 하면 비효율적이나 문제는 통과할 줄 알았는데 일부 테스트 케이스 런타임 에러가 발생한다.
   */

  /**
    정확성  테스트
      테스트 1 〉	통과 (28.99ms, 38.1MB)
      테스트 2 〉	통과 (30.39ms, 38.1MB)
      테스트 3 〉	통과 (55.69ms, 37.9MB)
      테스트 4 〉	통과 (36.75ms, 41.5MB)
      테스트 5 〉	통과 (41.74ms, 38.2MB)
      테스트 6 〉	통과 (30.65ms, 39.2MB)
      테스트 7 〉	통과 (25.74ms, 37.6MB)
      테스트 8 〉	통과 (42.23ms, 38.1MB)
      테스트 9 〉	통과 (23.17ms, 38.1MB)
      테스트 10 〉	통과 (29.22ms, 38.1MB)
      테스트 11 〉	실패 (런타임 에러)
      테스트 12 〉	실패 (런타임 에러)
      테스트 13 〉	실패 (런타임 에러)
      테스트 14 〉	실패 (런타임 에러)
      테스트 15 〉	실패 (런타임 에러)
      테스트 16 〉	실패 (런타임 에러)
      테스트 17 〉	실패 (런타임 에러)
      테스트 18 〉	실패 (런타임 에러)
      테스트 19 〉	통과 (0.08ms, 33.4MB)
      테스트 20 〉	통과 (0.27ms, 33.5MB)
      테스트 21 〉	통과 (0.16ms, 33.4MB)
      테스트 22 〉	통과 (0.08ms, 33.4MB)
      테스트 23 〉	통과 (10.94ms, 37.9MB)
      테스트 24 〉	통과 (39.54ms, 38MB)
      테스트 25 〉	통과 (769.41ms, 38MB)
      테스트 26 〉	통과 (535.74ms, 37.9MB)
      테스트 27 〉	통과 (0.54ms, 33.7MB)
      테스트 28 〉	통과 (0.54ms, 33.6MB)
      테스트 29 〉	통과 (1.03ms, 33.9MB)
      테스트 30 〉	통과 (0.08ms, 33.4MB)
      테스트 31 〉	통과 (0.11ms, 33.4MB)
      테스트 32 〉	통과 (4.07ms, 37.4MB)
      테스트 33 〉	통과 (21.76ms, 37.9MB)
      테스트 34 〉	통과 (0.26ms, 33.4MB)
      테스트 35 〉	통과 (0.25ms, 33.5MB)
      테스트 36 〉	통과 (0.25ms, 33.5MB)
    채점 결과
      정확성: 77.8
      합계: 77.8 / 100.0
   */

  const getMaxValueFromNonDivisibleNumbers = (
    arrA: number[],
    arrB: number[],
    factor: number
  ): number => {
    for (let i = factor; i > 0; i--) {
      if (
        arrA.every((num) => num % i === 0) &&
        !arrB.some((num) => num % i === 0)
      ) {
        return i;
      }
    }
    return 0;
  };

  const solution = (arrayA: number[], arrayB: number[]): number => {
    const minA = Math.min(...arrayA);
    const minB = Math.min(...arrayB);

    return Math.max(
      getMaxValueFromNonDivisibleNumbers(arrayA, arrayB, minA),
      getMaxValueFromNonDivisibleNumbers(arrayB, arrayA, minB)
    );
  };
}

{
  /**
   * 풀이 3번
   * 최솟값을 sort 메서드로 오름차순 정렬 후 1번으로 사용한다.
   * 그 값을 갖고 풀이 2번을 반복한다.
   * 이건 풀이 2보다 미세하게 비효율적인데 통과된다. 이유는 모르겠다.
   */

  /**
    정확성  테스트
      테스트 1 〉	통과 (28.30ms, 38MB)
      테스트 2 〉	통과 (27.24ms, 37.3MB)
      테스트 3 〉	통과 (30.33ms, 37.9MB)
      테스트 4 〉	통과 (48.53ms, 42.9MB)
      테스트 5 〉	통과 (33.45ms, 37.2MB)
      테스트 6 〉	통과 (35.20ms, 40.4MB)
      테스트 7 〉	통과 (23.02ms, 37.6MB)
      테스트 8 〉	통과 (27.19ms, 37.7MB)
      테스트 9 〉	통과 (26.85ms, 37.2MB)
      테스트 10 〉	통과 (44.28ms, 37.9MB)
      테스트 11 〉	통과 (1796.63ms, 79.2MB)
      테스트 12 〉	통과 (1815.23ms, 79MB)
      테스트 13 〉	통과 (1920.98ms, 79.1MB)
      테스트 14 〉	통과 (1864.61ms, 79.1MB)
      테스트 15 〉	통과 (1974.52ms, 79.1MB)
      테스트 16 〉	통과 (2130.62ms, 79.1MB)
      테스트 17 〉	통과 (2098.76ms, 79.2MB)
      테스트 18 〉	통과 (2044.84ms, 79.1MB)
      테스트 19 〉	통과 (0.08ms, 33.4MB)
      테스트 20 〉	통과 (0.19ms, 33.4MB)
      테스트 21 〉	통과 (0.19ms, 33.4MB)
      테스트 22 〉	통과 (0.26ms, 33.4MB)
      테스트 23 〉	통과 (7.06ms, 37.9MB)
      테스트 24 〉	통과 (39.24ms, 37.9MB)
      테스트 25 〉	통과 (831.16ms, 37.9MB)
      테스트 26 〉	통과 (663.05ms, 37.9MB)
      테스트 27 〉	통과 (1.16ms, 33.7MB)
      테스트 28 〉	통과 (0.68ms, 33.8MB)
      테스트 29 〉	통과 (1.12ms, 33.9MB)
      테스트 30 〉	통과 (0.10ms, 33.5MB)
      테스트 31 〉	통과 (0.08ms, 33.4MB)
      테스트 32 〉	통과 (4.04ms, 37.3MB)
      테스트 33 〉	통과 (25.15ms, 38MB)
      테스트 34 〉	통과 (0.28ms, 33.5MB)
      테스트 35 〉	통과 (0.28ms, 33.4MB)
      테스트 36 〉	통과 (0.27ms, 33.4MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */

  const getMaxValue = (arrA: number[], arrB: number[]): number => {
    for (let i = arrA[0]; i > 0; i--) {
      if (
        arrA.every((num) => num % i === 0) &&
        !arrB.some((num) => num % i === 0)
      ) {
        return i;
      }
    }
    return 0;
  };

  const solution = (arrayA: number[], arrayB: number[]): number => {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    const maxA = getMaxValue(arrayA, arrayB);
    const maxB = getMaxValue(arrayB, arrayA);

    return Math.max(maxA, maxB);
  };
}
