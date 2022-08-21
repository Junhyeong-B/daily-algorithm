process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(Array.from({ length: b }, () => "*".repeat(a)).join("\n"));
});

/**
 * 정확성  테스트
 *  테스트 1 〉	  통과 (46.52ms, 29.2MB)
 *  테스트 2 〉	  통과 (57.70ms, 29.4MB)
 *  테스트 3 〉	  통과 (48.65ms, 29.3MB)
 *  테스트 4 〉	  통과 (48.85ms, 29.1MB)
 *  테스트 5 〉	  통과 (47.34ms, 29.4MB)
 *  테스트 6 〉	  통과 (64.68ms, 29.4MB)
 *  테스트 7 〉	  통과 (49.79ms, 29.4MB)
 *  테스트 8 〉	  통과 (52.40ms, 29.2MB)
 *  테스트 9 〉	  통과 (49.13ms, 29.8MB)
 *  테스트 10 〉	통과 (47.08ms, 29.2MB)
 *  테스트 11 〉	통과 (50.82ms, 29.8MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
