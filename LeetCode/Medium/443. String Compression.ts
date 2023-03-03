/**
 * Runtime 53 ms Beats 100%
 * Memory 45.4 MB Beats 26.19%
 */
function compress(chars: string[]): number {
  const charsLength = chars.length;
  const result: string[] = [];
  let i = 0;

  while (i < charsLength) {
    const startIndex = i;
    const currentChar = chars[i];

    while (currentChar === chars[i]) {
      i++;
    }

    const count = i - startIndex;
    result.push(currentChar);
    if (count > 1) {
      result.push(...count.toString().split(''));
    }
  }

  for (let i = 0; i < charsLength; i++) {
    chars.pop();
  }
  for (const char of result) {
    chars.push(char);
  }

  return chars.length;
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])); // 6
// 그리고 파라미터 array 변경 => ['a', '2', 'b', '2', 'c', '3']
