/**
 * Runtime 68 ms Beats 87.60%
 * Memory 45.3 MB Beats 51.94%
 */

function addStrings(num1: string, num2: string): string {
  const result: string[] = [];
  const num1Split = num1.split('').reverse();
  const num2Split = num2.split('').reverse();

  let sum = 0;
  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    sum += +(num1Split[i] ?? 0) + +(num2Split[i] ?? 0);
    if (sum >= 10) {
      result.push((sum % 10).toString());
      sum = Math.floor(sum / 10);
    } else {
      result.push(sum.toString());
      sum = 0;
    }
  }

  if (sum > 0) {
    result.push(sum.toString());
  }

  return result.reverse().join('');
}

console.log(addStrings('123456789', '987654321')); // 1111111110
