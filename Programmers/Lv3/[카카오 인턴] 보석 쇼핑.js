{
  /*
    풀이 과정:
      진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 것 → 2 Pointer Sliding 방식으로 풀이하면 되겠다 생각했다.
      Map을 이용해서 오른쪽 Pointer가 증가할 때 마다 보석을 하나씩 구매하고 그 갯수를 카운트했고,
      Set을 이용해서 전체 보석 종류가 몇개인지 를 파악했다.
      해당 Map과 Set의 갯수(Size)가 같으면 모든 보석을 샀다는 것을 의미하고 그 때부터 왼쪽 Pointer를 증가시키면서 Count를 1씩 감소시켰다.
      Count가 0이 되면 보석을 구매하지 않은 것이므로 Map에서 제거하고,
      특정 범위를 답으로 요구하므로 모든 보석을 구매했을 때 왼쪽, 오른쪽 Pointer들 중 가장 작은 값을 답으로 제출했다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.13ms, 30MB)
      테스트 2 〉	통과 (0.21ms, 30MB)
      테스트 3 〉	통과 (0.44ms, 30.1MB)
      테스트 4 〉	통과 (0.21ms, 30MB)
      테스트 5 〉	통과 (0.79ms, 30MB)
      테스트 6 〉	통과 (0.12ms, 30MB)
      테스트 7 〉	통과 (0.12ms, 30.1MB)
      테스트 8 〉	통과 (0.33ms, 29.9MB)
      테스트 9 〉	통과 (0.40ms, 30.1MB)
      테스트 10 〉	통과 (0.31ms, 30MB)
      테스트 11 〉	통과 (0.42ms, 30.2MB)
      테스트 12 〉	통과 (0.65ms, 29.8MB)
      테스트 13 〉	통과 (0.80ms, 30.3MB)
      테스트 14 〉	통과 (0.78ms, 30.3MB)
      테스트 15 〉	통과 (1.47ms, 30.2MB)

    효율성  테스트
      테스트 1 〉	통과 (1.85ms, 30.2MB)
      테스트 2 〉	통과 (3.47ms, 29.7MB)
      테스트 3 〉	통과 (8.15ms, 33.3MB)
      테스트 4 〉	통과 (6.33ms, 33.9MB)
      테스트 5 〉	통과 (10.70ms, 33.4MB)
      테스트 6 〉	통과 (9.68ms, 33.3MB)
      테스트 7 〉	통과 (10.47ms, 33.8MB)
      테스트 8 〉	통과 (10.98ms, 33.8MB)
      테스트 9 〉	통과 (9.57ms, 33.9MB)
      테스트 10 〉	통과 (12.33ms, 34.2MB)
      테스트 11 〉	통과 (45.98ms, 35.1MB)
      테스트 12 〉	통과 (13.60ms, 35.5MB)
      테스트 13 〉	통과 (22.41ms, 37.1MB)
      테스트 14 〉	통과 (16.71ms, 35.6MB)
      테스트 15 〉	통과 (23.33ms, 35.6MB)

    채점 결과
      정확성: 33.3
      효율성: 66.7
      합계: 100.0 / 100.0
  */
  const solution = (gems) => {
    const gemsCountMap = new Map();
    const gemsName = new Set(gems);
    const n = gems.length;
    const answer = [0, Infinity];
    let left = 0;

    for (let right = 0; right < n; right++) {
      const gemCount = gemsCountMap.get(gems[right]) || 0;
      gemsCountMap.set(gems[right], gemCount + 1);

      while (gemsName.size === gemsCountMap.size) {
        if (right - left < answer[1] - answer[0]) {
          [answer[0], answer[1]] = [left + 1, right + 1];
        }

        const updatedGemCount = gemsCountMap.get(gems[left]) - 1;
        if (!updatedGemCount) {
          gemsCountMap.delete(gems[left]);
        } else {
          gemsCountMap.set(gems[left], updatedGemCount);
        }
        left++;
      }
    }

    return answer;
  };
}
