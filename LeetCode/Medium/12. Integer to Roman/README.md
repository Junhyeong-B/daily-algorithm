```jsx
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let n = num;
  const answer = [];

  while (n !== 0) {
    if (n >= 1000) {
      n -= 1000;
      answer.push("M");
    } else if (n >= 900) {
      n -= 900;
      answer.push("CM");
    } else if (n >= 500) {
      n -= 500;
      answer.push("D");
    } else if (n >= 400) {
      n -= 400;
      answer.push("CD");
    } else if (n >= 100) {
      n -= 100;
      answer.push("C");
    } else if (n >= 90) {
      n -= 90;
      answer.push("XC");
    } else if (n >= 50) {
      n -= 50;
      answer.push("L");
    } else if (n >= 40) {
      n -= 40;
      answer.push("XL");
    } else if (n >= 10) {
      n -= 10;
      answer.push("X");
    } else if (n >= 9) {
      n -= 9;
      answer.push("IX");
    } else if (n >= 5) {
      n -= 5;
      answer.push("V");
    } else if (n >= 4) {
      n -= 4;
      answer.push("IV");
    } else {
      n -= 1;
      answer.push("I");
    }
  }

  return answer.join("");
};
```