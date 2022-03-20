```jsx
{
  /*
    풀이 과정:
      주어진 항공권은 모두 사용해야 하는 조건에 의해 DFS를 사용해야 겠다고 생각했다.
      우선 "ICN" 부터 출발해야 하니 tickets를 순회하여 "ICN"부터 출발하는 tickets를 파라미터로 넘겨주어 dfs를 호출했다.
      dfs에서는 도착할 때의 공항 이름을 파라미터로 전달 받고, tickets를 순회하면서 출발할 때의 공항 이름과 일치하면 해당 공항 이름을 tmp 배열에 추가 및 다음 파라미터로 전달하면서 dfs를 순회했다.
      한 번 사용한 항공권은 다시 사용할 수 없으므로 이를 확인하기 위해 check 배열을 만들었고 0이면 미사용, 1이면 사용한 것으로 판단.
      가능한 항공권 사용 순서는 여러 개가 나오므로 이를 알파벳 순서가 앞서는 경로를 return하기 위해서 문자열 정렬을 사용했다.
      알파벳 문자열을 .sort() 하게 되면 알파벳 순서로 자동 정렬된다.
      따라서, 가능한 항공권 순회를 모두 마치면 answer 배열에 join(" ")으로 문자열 형태로 추가했고, 이를 sort() 하여 0 번째 항공권을 split(" ")하여 반환하였다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (137.01ms, 40.4MB)
      테스트 2 〉	통과 (0.21ms, 29.9MB)
      테스트 3 〉	통과 (0.45ms, 30.1MB)
      테스트 4 〉	통과 (0.33ms, 30.2MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (tickets) => {
    const check = Array.from({ length: tickets.length }, () => 0);
    const answer = [];

    const dfs = (L, start, tickets, tmp, check) => {
      if (L === tickets.length) {
        answer.push(tmp.slice().join(" "));
      } else {
        for (let i = 0; i < tickets.length; i++) {
          if (check[i] === 0 && start === tickets[i][0]) {
            check[i] = 1;
            dfs(
              L + 1,
              tickets[i][1],
              tickets,
              tmp.concat(tickets[i][1]),
              check
            );
            check[i] = 0;
          }
        }
      }
    };

    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === "ICN") {
        check[i] = 1;
        dfs(1, tickets[i][1], tickets, tickets[i], check);
        check[i] = 0;
      }
    }

    return answer.sort()[0].split(" ");
  };
}
```