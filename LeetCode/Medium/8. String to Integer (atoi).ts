/**
 * Runtime 175 ms Beats 9.44%
 * Memory 45.6 MB Beats 50.61%
 */

function myAtoi(s: string): number {
  const str = s.trim();

  let i = 0;
  let sign = 1;
  if (str[0] === '-' || str[0] === '+') {
    sign = str[0] === '-' ? -1 : 1;
    i++;
  }

  const MAX = 2 ** 31 - 1;
  const MIN = -(MAX + 1);
  let num = 0;

  while (str[i] && str[i] !== ' ' && !isNaN(+str[i])) {
    num = num * 10 + +str[i++];
  }

  num = num * sign;

  return num <= MIN ? MIN : num >= MAX ? MAX : num;
}

console.log(myAtoi('4193 with words')); // 4193
