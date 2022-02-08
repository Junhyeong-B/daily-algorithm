/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const answer = [];
  strs.forEach((str, i) => {
    const key = str.split("").sort().join("");
    map.set(key, map.has(key) ? [...map.get(key), i] : [i]);
  });

  for (const [_, value] of map) {
    const tmp = [];
    for (const i of value) {
      tmp.push(strs[i]);
    }
    answer.push([...tmp]);
  }

  return answer;
};
