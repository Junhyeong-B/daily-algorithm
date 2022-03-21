{
  /*
    풀이 과정:
      1. 문자열은 앞에서부터 정해진 길이만큼 잘라야 하므로 전체 문자열을 1부터 문자열의 절반 길이만큼 나눠서 순회를 돈다.
        - aabbcc 이면 1, 2, 3 3회 순회
      2. String.prototype.slice() 메서드를 이용해서 각각의 문자열 길이만큼 문자열을 나누어 배열에 추가한다.
        - aabbcc에서 2이면 "aa", "bb", "cc", 3이면 "aab", "bcc"
      3. 해당 문자열을 나누었으면 겹치는 것이 있는지 확인, 만약 겹친다면 배열의 해당 index 값을 다른 값(여기서는 -1)으로 바꾼다. → 나중에 filter처리 하기 위함
      4. count 변수를 사용해서 겹치는 것이 있다면 count 값을 1씩 증가하고, 마지막에 문자열을 합칠 때 count 값이 2 이상이라면 해당 숫자를 앞에 붙여준다.
      5. 모든 과정이 끝난 후 문자열 길이를 비교해서 작은 값을 answer 변수와 교체한다.
  */

  const solution = (s) => {
    const n = s.length;
    let answer = n;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      const words = [];

      for (let j = 0; j < s.length; j += i) {
        words.push(s.slice(j, j + i));
      }

      let currentIndex = 0;
      let count = 1;

      for (let j = 1; j < words.length; j++) {
        if (words[currentIndex] === words[j]) {
          words[j] = -1;
          count += 1;
        } else {
          words[currentIndex] =
            (count === 1 ? "" : count).toString() + words[currentIndex];
          currentIndex = j;
          count = 1;
        }
      }

      if (count > 1) {
        words[currentIndex] =
          (count === 1 ? "" : count).toString() + words[currentIndex];
      }

      answer = Math.min(
        words.filter((word) => word !== -1).join("").length,
        answer
      );
    }

    return answer;
  };

  /*
    정확성  테스트
      테스트 1 〉	통과 (0.16ms, 30MB)
      테스트 2 〉	통과 (0.84ms, 30MB)
      테스트 3 〉	통과 (0.32ms, 30MB)
      테스트 4 〉	통과 (0.18ms, 30.1MB)
      테스트 5 〉	통과 (0.14ms, 30MB)
      테스트 6 〉	통과 (0.17ms, 30.1MB)
      테스트 7 〉	통과 (0.49ms, 30.1MB)
      테스트 8 〉	통과 (0.90ms, 30MB)
      테스트 9 〉	통과 (1.27ms, 30.1MB)
      테스트 10 〉	통과 (3.18ms, 30.3MB)
      테스트 11 〉	통과 (0.23ms, 30MB)
      테스트 12 〉	통과 (0.21ms, 30.2MB)
      테스트 13 〉	통과 (0.25ms, 30.1MB)
      테스트 14 〉	통과 (0.63ms, 30MB)
      테스트 15 〉	통과 (0.21ms, 29.6MB)
      테스트 16 〉	통과 (0.19ms, 30.2MB)
      테스트 17 〉	통과 (1.07ms, 30.1MB)
      테스트 18 〉	통과 (0.99ms, 30.1MB)
      테스트 19 〉	통과 (1.01ms, 29.9MB)
      테스트 20 〉	통과 (8.16ms, 33.3MB)
      테스트 21 〉	통과 (7.37ms, 33.3MB)
      테스트 22 〉	통과 (12.13ms, 33.4MB)
      테스트 23 〉	통과 (2.22ms, 30.4MB)
      테스트 24 〉	통과 (2.02ms, 30MB)
      테스트 25 〉	통과 (7.50ms, 33MB)
      테스트 26 〉	통과 (8.70ms, 33.5MB)
      테스트 27 〉	통과 (11.48ms, 33.5MB)
      테스트 28 〉	통과 (0.17ms, 30.2MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
}
