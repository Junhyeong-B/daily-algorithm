/*
  정확성  테스트
    테스트 1 〉	통과 (0.30ms, 30.1MB)
    테스트 2 〉	통과 (0.17ms, 29.8MB)
    테스트 3 〉	통과 (0.48ms, 30.1MB)
    테스트 4 〉	통과 (0.33ms, 29.8MB)
    테스트 5 〉	통과 (0.28ms, 29.6MB)
    테스트 6 〉	통과 (0.25ms, 30.2MB)
    테스트 7 〉	통과 (0.17ms, 30.1MB)
    테스트 8 〉	통과 (0.28ms, 29.9MB)
    테스트 9 〉	통과 (0.33ms, 30.1MB)
    테스트 10 〉	통과 (0.19ms, 29.9MB)
    테스트 11 〉	통과 (0.34ms, 30.1MB)
    테스트 12 〉	통과 (0.22ms, 30MB)
    테스트 13 〉	통과 (0.19ms, 30.1MB)
    테스트 14 〉	통과 (0.46ms, 30.1MB)
    테스트 15 〉	통과 (0.23ms, 30.1MB)
    테스트 16 〉	통과 (0.32ms, 29.9MB)
    테스트 17 〉	통과 (0.41ms, 30.1MB)
    테스트 18 〉	통과 (0.35ms, 30.1MB)
    테스트 19 〉	통과 (0.24ms, 30.1MB)
    테스트 20 〉	통과 (0.37ms, 30.1MB)
    테스트 21 〉	통과 (0.25ms, 30.1MB)
    테스트 22 〉	통과 (0.36ms, 30MB)
    테스트 23 〉	통과 (0.18ms, 30MB)
    테스트 24 〉	통과 (0.33ms, 30MB)
    테스트 25 〉	통과 (0.21ms, 30.1MB)
    테스트 26 〉	통과 (0.19ms, 30.1MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^0-9a-z-_\.]/gm, "")
    .replace(/\.+/gm, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "")
    .slice(0, 15)
    .replace(/\.$/, "");

  if (!answer.length) {
    answer += "a";
  }

  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }

  return answer;
}
