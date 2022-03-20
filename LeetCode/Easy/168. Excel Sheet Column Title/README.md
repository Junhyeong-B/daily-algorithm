```jsx
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let answer = "";
  let num = columnNumber;

  while (num) {
    if (num % 26 === 0) {
      answer = "Z" + answer;
      num = Math.floor(num / 26) - 1;
    } else {
      answer = String.fromCharCode((num % 26) + 64) + answer;
      num = Math.floor(num / 26);
    }
  }

  return answer;
};
```