```jsx
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const n = s.length;
  const answer = [];
  const DFS = (L, tmp) => {
    if (tmp.length > 4) {
      return;
    }
    if (L === n) {
      if (tmp.length !== 4) {
        return;
      }
      answer.push(tmp.join("."));
    } else {
      for (let i = 1; i < 4; i++) {
        const ip = s.slice(L, L + i);
        if (ip.length !== (+ip + "").length) {
          continue;
        }
        if (ip >= 0 && ip <= 255 && L + i <= n) {
          DFS(L + i, [...tmp, ip]);
        }
      }
    }
  };

  DFS(0, []);

  return answer;
};
```