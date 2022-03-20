```jsx
{
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.08ms, 30.1MB)
      테스트 2 〉	통과 (0.07ms, 30MB)
      테스트 3 〉	통과 (0.18ms, 30.1MB)
      테스트 4 〉	통과 (0.16ms, 30.2MB)
      테스트 5 〉	통과 (0.12ms, 30.2MB)
      테스트 6 〉	통과 (0.10ms, 30.1MB)
      테스트 7 〉	통과 (0.10ms, 30.3MB)
      테스트 8 〉	통과 (0.16ms, 30.2MB)
      테스트 9 〉	통과 (0.28ms, 30MB)
      테스트 10 〉	통과 (0.26ms, 30.2MB)
      테스트 11 〉	통과 (0.23ms, 30.1MB)
      테스트 12 〉	통과 (0.45ms, 30MB)
      테스트 13 〉	통과 (0.16ms, 30.2MB)
      테스트 14 〉	통과 (0.17ms, 30.1MB)
      테스트 15 〉	통과 (0.19ms, 30.1MB)
      테스트 16 〉	통과 (0.22ms, 30.1MB)
      테스트 17 〉	통과 (0.07ms, 30.2MB)
      테스트 18 〉	통과 (0.08ms, 30.1MB)
      테스트 19 〉	통과 (0.09ms, 30.1MB)
      테스트 20 〉	통과 (0.21ms, 30.1MB)
      테스트 21 〉	통과 (0.26ms, 30MB)

    효율성  테스트
      테스트 1 〉	통과 (4.66ms, 32.9MB)
      테스트 2 〉	통과 (8.80ms, 32.6MB)

    채점 결과
      정확성: 69.3
      효율성: 30.7
      합계: 100.0 / 100.0
  */
  const solution = (s) => {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
      let left = i;
      let right = i;

      while (left >= 0 && right <= s.length - 1) {
        if (s[left] !== s[right]) {
          break;
        }

        if (answer < right - left + 1) {
          answer = right - left + 1;
        }
        left--;
        right++;
      }

      left = i;
      right = i + 1;
      while (left >= 0 && right <= s.length - 1) {
        if (s[left] !== s[right]) {
          break;
        }

        if (answer < right - left + 1) {
          answer = right - left + 1;
        }
        left--;
        right++;
      }
    }

    return answer;
  };
}
```