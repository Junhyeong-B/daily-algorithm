```jsx
{
  /*
    풀이 과정:
      1. 파라미터로 들어온 문자열을 우선 2자리씩 끊어서 배열에 담는다.
        - 만약 파라미터가 둘 다 공백이거나, 두 문자열 모두 숫자/특수문자 등으로 담길 부분 문자열이 없다면 65536을 그대로 리턴한다.
      2. Map을 사용하여 겹치는 문자열의 갯수를 기록한다.
      3. 교집합의 갯수를 구하기 위해 map1을 순회하면서 key 값이 map2에도 있다면 겹치는 것이므로 둘 중 작은 값을 교집합 갯수에 더한다.
      4. 합집합의 갯수를 구하기 위해 map1을 순회하면서 key 값이 map2에도 있다면 둘 중 큰 값을 합집합 갯수에 더한 후 map2에 해당 key 값을 delete 해버린다. → 이미 사용한 것인지 표시
         이후 나머지 map1, map2를 순회하면서 나오는 값들을 전부 합집합 갯수에 더해준다.
      5. 이를 연산하여 값을 반환한다.
  */

  const solution = (str1, str2) => {
    const s1 = [];
    const s2 = [];

    if (str1 === "" && str2 === "") {
      return 65536;
    }

    for (let i = 0; i < str1.length - 1; i++) {
      const word = str1[i] + str1[i + 1];
      if (word.replace(/[a-z]/gi, "").length) {
        continue;
      }

      s1.push(word.toLowerCase());
    }

    for (let i = 0; i < str2.length - 1; i++) {
      const word = str2[i] + str2[i + 1];
      if (word.replace(/[a-z]/gi, "").length) {
        continue;
      }

      s2.push(word.toLowerCase());
    }

    if (!s1.length && !s2.length) {
      return 65536;
    }

    const map1 = new Map();
    const map2 = new Map();

    for (const word of s1) {
      const value = map1.get(word) || 0;
      map1.set(word, value + 1);
    }
    for (const word of s2) {
      const value = map2.get(word) || 0;
      map2.set(word, value + 1);
    }

    let sub = 0;
    let sum = 0;

    for (const [key, value] of map1) {
      if (map2.has(key)) {
        sub += Math.min(map2.get(key), value);
      }
    }

    for (const [key, value] of map1) {
      if (map2.has(key)) {
        sum += Math.max(map2.get(key), value);
        map2.delete(key);
      } else {
        sum += value;
      }
    }

    for (const [, value] of map2) {
      sum += value;
    }

    return Math.floor((sub / sum) * 65536);
  };

  /*
    정확성  테스트
      테스트 1 〉	통과 (0.40ms, 30.1MB)
      테스트 2 〉	통과 (0.40ms, 30MB)
      테스트 3 〉	통과 (0.37ms, 30.1MB)
      테스트 4 〉	통과 (1.28ms, 30.2MB)
      테스트 5 〉	통과 (0.53ms, 30.1MB)
      테스트 6 〉	통과 (0.39ms, 30.1MB)
      테스트 7 〉	통과 (0.75ms, 29.9MB)
      테스트 8 〉	통과 (0.42ms, 30.2MB)
      테스트 9 〉	통과 (0.71ms, 30.1MB)
      테스트 10 〉	통과 (0.91ms, 30.1MB)
      테스트 11 〉	통과 (0.88ms, 30MB)
      테스트 12 〉	통과 (0.37ms, 30.1MB)
      테스트 13 〉	통과 (0.44ms, 30.1MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
}

```