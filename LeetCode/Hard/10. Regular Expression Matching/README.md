```jsx
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const reg = new RegExp(p);
  if (!s.match(reg)) return false;
  return s.match(reg)[0] === s;
};
```