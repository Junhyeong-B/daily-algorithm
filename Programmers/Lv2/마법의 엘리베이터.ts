// number 타입으로 시도, 실패
{
  const getFactor = (num: number): number => {
    const factor = Array(num + 1).fill('0');
    factor[0] = 1;
    return Number(factor.join(''));
  };

  const solution = (storey: number): number => {
    let i = 1;
    let count = 0;

    while (storey > 0) {
      const factor = getFactor(i);
      const factor2 = getFactor(i - 1);
      const currentNumber = storey % factor;
      const currentFirstNumber = Math.floor(currentNumber / factor2);
      if (currentFirstNumber === 0) {
        i++;
        continue;
      }
      if (currentFirstNumber > 5) {
        count += 10 - currentFirstNumber;
        storey += factor - currentNumber;
      } else {
        if (currentFirstNumber === 5) {
          const factor3 = getFactor(i + 1);
          const nextNumber = Math.floor((storey % factor3) / factor);
          if (nextNumber >= 5) {
            count += 10 - currentFirstNumber;
            storey += factor - currentNumber;
            i++;
            continue;
          }
        } else {
          count += currentFirstNumber;
          storey -= currentNumber;
          i++;
        }
      }
    }

    return count;
  };

  console.log(solution(99)); // 2

  /**
    정확성  테스트
      테스트 1 〉	  통과 (0.16ms, 33.6MB)
      테스트 2 〉	  통과 (0.14ms, 33.4MB)
      테스트 3 〉	  통과 (0.13ms, 33.4MB)
      테스트 4 〉	  통과 (0.18ms, 33.4MB)
      테스트 5 〉	  실패 (시간 초과)
      테스트 6 〉	  실패 (시간 초과)
      테스트 7 〉	  통과 (0.11ms, 33.5MB)
      테스트 8 〉	  실패 (시간 초과)
      테스트 9 〉	  실패 (시간 초과)
      테스트 10 〉	통과 (0.11ms, 33.6MB)
      테스트 11 〉	통과 (0.17ms, 33.5MB)
      테스트 12 〉	통과 (0.12ms, 33.5MB)
      테스트 13 〉	통과 (0.10ms, 33.4MB)
    채점 결과
      정확성: 69.2
      합계: 69.2 / 100.0
   */
}

// string 타입으로 시도, 성공
{
  const plusOne = (str: string[], index: number): void => {
    let i = index;
    str[i] = '9';

    while (i >= 0) {
      str[i] = +str[i] + 1 + '';
      if (str[i] === '10') {
        str[i] = '0';
        i--;

        if (i === -1) {
          str.unshift('1');
        }
      } else {
        break;
      }
    }
  };

  const solution = (storey: number): number => {
    let count = 0;
    let strStorey = storey.toString().split('');
    let length = strStorey.length;
    let i = strStorey.length - 1;
    while (i >= 0) {
      const currentNumber = +strStorey[i];
      if (currentNumber === 0) {
        i--;
        continue;
      }

      if (currentNumber < 5) {
        count += currentNumber;
        strStorey[i] = '0';
        i--;
        continue;
      } else {
        if (
          currentNumber === 5 &&
          strStorey[i - 1] !== undefined &&
          +strStorey[i - 1] >= 5
        ) {
          strStorey[i - 1] = +strStorey[i - 1] + 1 + '';
          strStorey[i] = '0';
          count += 5;
        } else if (
          (currentNumber === 5 &&
            strStorey[i - 1] !== undefined &&
            +strStorey[i - 1] < 5) ||
          currentNumber === 5
        ) {
          strStorey[i] = '0';
          count += 5;
        } else {
          count += 10 - +strStorey[i];
          if (strStorey[i - 1] !== undefined) {
            plusOne(strStorey, i);
          } else {
            strStorey.unshift('1');
            i++;
          }
          strStorey[i] = '0';
        }
      }

      strStorey = strStorey.join('').split('');
      if (strStorey.length !== length) {
        length = strStorey.length;
      } else {
        i--;
      }
    }

    return count;
  };

  console.log(solution(2554)); // 16

  /**
    정확성  테스트
      테스트 1 〉	  통과 (0.11ms, 33.4MB)
      테스트 2 〉	  통과 (0.10ms, 33.4MB)
      테스트 3 〉	  통과 (0.10ms, 33.5MB)
      테스트 4 〉	  통과 (0.11ms, 33.5MB)
      테스트 5 〉	  통과 (0.11ms, 33.4MB)
      테스트 6 〉	  통과 (0.12ms, 33.4MB)
      테스트 7 〉	  통과 (0.11ms, 33.4MB)
      테스트 8 〉	  통과 (0.10ms, 33.5MB)
      테스트 9 〉	  통과 (0.12ms, 33.5MB)
      테스트 10 〉	통과 (0.14ms, 33.4MB)
      테스트 11 〉	통과 (0.14ms, 33.4MB)
      테스트 12 〉	통과 (0.11ms, 33.4MB)
      테스트 13 〉	통과 (0.11ms, 33.5MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}
