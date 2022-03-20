```jsx
{
  /*
    풀이 과정:
      파라미터로 받는 user_id, banned_id 배열의 길이가 작아서(최대 길이: 8) DFS로 Brute Force 형태로 풀어도 가능하겠다고 생각했다.
      banned_id로 전달받은 ID는 정규표현식으로 user_id와 매칭시키려고 했고
      만들어진 정규표현식은 user_id를 순회하면서 각 id를 match 시키고, match시킨 결과의 길이와 user_id의 길이가 같으면 matching된 것 이라고 판단.
      모든 경우에 대해 확인이 완료되면 중복되는 경우의 수를 줄이기 위해 Set 객체를 사용했고, 중복되지 않는 경우에만 Count하여 답을 반환했다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.40ms, 30.1MB)
      테스트 2 〉	통과 (0.58ms, 30.2MB)
      테스트 3 〉	통과 (0.51ms, 30.1MB)
      테스트 4 〉	통과 (0.46ms, 30.1MB)
      테스트 5 〉	통과 (161.19ms, 35.1MB)
      테스트 6 〉	통과 (3.88ms, 33.9MB)
      테스트 7 〉	통과 (0.48ms, 29.9MB)
      테스트 8 〉	통과 (0.56ms, 30.1MB)
      테스트 9 〉	통과 (0.58ms, 30.1MB)
      테스트 10 〉	통과 (0.64ms, 30.2MB)
      테스트 11 〉	통과 (0.59ms, 30.2MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */

  const solution = (user_id, banned_id) => {
    const check = Array.from({ length: user_id.length }, () => 0);
    let answer = 0;

    const dfs = (L, tmp, userId, bannedId, check, set) => {
      if (L === banned_id.length) {
        const bannedIds = tmp.sort().join("");
        if (set.has(bannedIds)) {
          return;
        }

        answer++;
        set.add(bannedIds);
      } else {
        const currentBannedId = [];
        for (const alpha of bannedId[L]) {
          currentBannedId.push(alpha === "*" ? "." : alpha);
        }
        const regexp = new RegExp(currentBannedId.join(""), "g");
        for (let i = 0; i < userId.length; i++) {
          if (check[i] === 1) {
            continue;
          }

          const currentId = userId[i];
          const matchedId = currentId.match(regexp);
          if (!matchedId || matchedId[0].length !== currentId.length) {
            continue;
          }

          check[i] = 1;
          dfs(L + 1, tmp.concat(currentId), userId, bannedId, check, set);
          check[i] = 0;
        }
      }
    };

    dfs(0, [], user_id, banned_id, check, new Set());

    return answer;
  };
}
```