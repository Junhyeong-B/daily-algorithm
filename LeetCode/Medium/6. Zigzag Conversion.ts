/**
 * Runtime 1562 ms Beats 5.9%
 * Memory 71 MB Beats 5.25%
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const convertedArray = Array.from({ length: numRows }, () =>
    Array.from({ length: s.length }, () => '')
  );

  let i = 0;
  let row = 0;
  outer: while (i < s.length) {
    for (let j = 0; j < numRows; j++) {
      if (convertedArray[j][row] !== '') {
        continue;
      }

      convertedArray[j][row] = s[i];
      i++;

      if (i === s.length) {
        break outer;
      }
    }

    for (let j = numRows - 2; j >= 0; j--) {
      row++;
      convertedArray[j][row] = s[i];
      i++;

      if (i === s.length) {
        break outer;
      }
    }
  }

  return convertedArray.map((arr) => arr.join('')).join('');
}

console.log(convert('AB', 1)); // AB
