{
  const solution = (k: number, d: number): number  => {
    const dSquare = d * d;
    let count = 0;
  
    for (let i = 0; i <= d; i += k) {
      const maxY = Math.sqrt(dSquare - i * i);
      count += Math.ceil(maxY / k) + (maxY % k === 0 ? 1 : 0);
    }
  
    return count;
  }
  
  console.log(solution(1, 5)); // 26

  /**
    정확성  테스트
      테스트 1 〉	통과 (0.04ms, 33.5MB)
      테스트 2 〉	통과 (0.04ms, 33.5MB)
      테스트 3 〉	통과 (0.53ms, 33.7MB)
      테스트 4 〉	통과 (0.32ms, 33.7MB)
      테스트 5 〉	통과 (0.73ms, 33.9MB)
      테스트 6 〉	통과 (0.66ms, 33.8MB)
      테스트 7 〉	통과 (0.37ms, 33.6MB)
      테스트 8 〉	통과 (2.82ms, 37.1MB)
      테스트 9 〉	통과 (0.73ms, 33.8MB)
      테스트 10 〉	통과 (2.29ms, 37MB)
      테스트 11 〉	통과 (16.91ms, 37.6MB)
      테스트 12 〉	통과 (0.04ms, 33.5MB)
      테스트 13 〉	통과 (10.61ms, 37.7MB)
      테스트 14 〉	통과 (10.13ms, 37.8MB)
      테스트 15 〉	통과 (0.04ms, 33.4MB)
      테스트 16 〉	통과 (0.04ms, 33.5MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}