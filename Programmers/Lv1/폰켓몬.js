/*
  정확성  테스트
    테스트 1 〉	통과 (0.03ms, 30MB)
    테스트 2 〉	통과 (0.05ms, 29.9MB)
    테스트 3 〉	통과 (0.05ms, 29.9MB)
    테스트 4 〉	통과 (0.03ms, 29.9MB)
    테스트 5 〉	통과 (0.03ms, 29.9MB)
    테스트 6 〉	통과 (0.04ms, 29.8MB)
    테스트 7 〉	통과 (0.04ms, 29.9MB)
    테스트 8 〉	통과 (0.10ms, 29.8MB)
    테스트 9 〉	통과 (0.04ms, 29.7MB)
    테스트 10 〉	통과 (0.04ms, 30MB)
    테스트 11 〉	통과 (0.04ms, 29.7MB)
    테스트 12 〉	통과 (0.16ms, 30.1MB)
    테스트 13 〉	통과 (0.07ms, 29.9MB)
    테스트 14 〉	통과 (0.07ms, 29.8MB)
    테스트 15 〉	통과 (0.06ms, 29.8MB)
    테스트 16 〉	통과 (0.58ms, 30.2MB)
    테스트 17 〉	통과 (0.57ms, 30.1MB)
    테스트 18 〉	통과 (0.34ms, 30MB)
    테스트 19 〉	통과 (0.29ms, 29.5MB)
    테스트 20 〉	통과 (0.28ms, 29.4MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(nums) {
  const kindsOfPonkemon = new Set(nums);
  const N = nums.length / 2;

  return kindsOfPonkemon.size >= N ? N : kindsOfPonkemon.size;
}
