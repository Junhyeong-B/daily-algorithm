/**
 * Runtime: 234 ms, faster than 50.15% of TypeScript online submissions for Integer to Roman.
 * Memory Usage: 49.2 MB, less than 49.26% of TypeScript online submissions for Integer to Roman.
 */

{
  const intToRoman = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];
    let i = 0;
    const answer: string[] = [];
    while (0 < num) {
      if (values[i] <= num) {
        answer.push(symbols[i]);
        num -= values[i];
      } else {
        i++;
      }
    }

    return answer.join('');
  };

  console.log(intToRoman(1994)); // MCMXCIV
}
