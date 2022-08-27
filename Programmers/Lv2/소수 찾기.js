const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(numbers) {
  const answer = new Set();

  const getNum = (numArr, num) => {
    if (numArr.length) {
      for (let i = 0; i < numArr.length; i++) {
        const tmp = [...numArr];
        const currentNumber = num + numArr[i];

        if (isPrime(parseInt(currentNumber))) {
          answer.add(parseInt(currentNumber));
        }

        tmp.splice(i, 1);
        getNum(tmp, currentNumber);
      }
    }
  };

  getNum(numbers.split(""), "");

  return answer.size;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.17ms, 30.1MB)
 *  테스트 2 〉	통과 (2.27ms, 31.9MB)
 *  테스트 3 〉	통과 (0.13ms, 30MB)
 *  테스트 4 〉	통과 (20.95ms, 32.4MB)
 *  테스트 5 〉	통과 (26.19ms, 34.2MB)
 *  테스트 6 〉	통과 (0.13ms, 29.9MB)
 *  테스트 7 〉	통과 (0.20ms, 29.8MB)
 *  테스트 8 〉	통과 (5.72ms, 33.1MB)
 *  테스트 9 〉	통과 (0.14ms, 29.9MB)
 *  테스트 10 〉통과 (3.72ms, 31.9MB)
 *  테스트 11 〉통과 (1.27ms, 32.8MB)
 *  테스트 12 〉통과 (0.26ms, 29.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
