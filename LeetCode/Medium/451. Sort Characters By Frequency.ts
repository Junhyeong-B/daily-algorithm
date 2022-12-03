/**
 * Runtime 378 ms Beats 5.97%
 * Memory 50.6 MB Beats 29.85%
 */

function frequencySort(s: string): string {
  const frequent: Record<string, number> = s
    .split('')
    .reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {});

  return Object.entries(frequent)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      } else {
        return b[1] - a[1];
      }
    })
    .map((freq) => ''.padEnd(freq[1], freq[0]))
    .join('');
}

console.log(frequencySort('tree')); // eert
