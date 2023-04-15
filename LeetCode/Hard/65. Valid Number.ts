/**
 * Runtime 79 ms Beats 64.81%
 * Memory 45.2 MB Beats 37.4%
 */
function isNumber(s: string): boolean {
  let hasE = false;
  let hasNum = false;
  let hasSign = false;
  let hasDec = false;

  for (const exp of s) {
    switch (exp) {
      case '+':
      case '-':
        if (hasSign || hasNum || hasDec) {
          return false;
        } else {
          hasSign = true;
        }
        break;

      case 'e':
      case 'E':
        if (hasE || !hasNum) {
          return false;
        } else {
          hasE = true;
          hasNum = false;
          hasSign = false;
          hasDec = false;
        }
        break;

      case '.':
        if (hasDec || hasE) {
          return false;
        } else {
          hasDec = true;
        }
        break;

      default:
        if (+exp <= 9 || +exp >= 0) {
          hasNum = true;
        } else {
          return false;
        }
    }
  }

  return hasNum;
}

console.log(isNumber('-90E3')); // true
