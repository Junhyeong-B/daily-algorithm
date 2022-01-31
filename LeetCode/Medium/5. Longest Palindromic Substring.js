/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    let lt = i;
    let rt = i;
    while (lt >= 0 && rt < s.length && s[lt] === s[rt]) {
      if (rt - lt + 1 > resLen) {
        res = s.slice(lt, rt + 1);
        resLen = rt - lt + 1;
      }
      lt -= 1;
      rt += 1;
    }

    lt = i;
    rt = i + 1;
    while (lt >= 0 && rt < s.length && s[lt] === s[rt]) {
      if (rt - lt + 1 > resLen) {
        console.log(rt, lt);
        res = s.slice(lt, rt + 1);
        resLen = rt - lt + 1;
      }
      lt -= 1;
      rt += 1;
    }
  }

  return res;
};
