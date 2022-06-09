/**
 * Runtime: 101 ms, faster than 72.29% of TypeScript online submissions for Multiply Strings.
 * Memory Usage: 45 MB, less than 79.52% of TypeScript online submissions for Multiply Strings.
 */

function multiply(num1: string, num2: string): string {
  if (!+num1 || !+num2) {
    return '0'
  }

  const multipliedNumberArray = Array(num1.length + num2.length).fill(0);

  let lastIndex = multipliedNumberArray.length - 1;

  for (let i = num1.length - 1; i >= 0; i--) {
    let currentIndex = lastIndex--;

    for (let j = num2.length - 1; j >= 0; j--) {
      const result = (+num1[i] * +num2[j]) + multipliedNumberArray[currentIndex];
      multipliedNumberArray[currentIndex] = result % 10;
      multipliedNumberArray[--currentIndex] += ~~(result / 10);
    }
  }

  return multipliedNumberArray.join("").replace(/^0+/, "");
};