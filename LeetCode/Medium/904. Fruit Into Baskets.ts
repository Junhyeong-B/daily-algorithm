/**
 * Runtime 695 ms Beats 5.36%
 * Memory 59.9 MB Beats 7.14%
 */

function totalFruit(fruits: number[]): number {
  const 과일바구니: Record<string, number> = {};
  let 과일개수 = 0;

  let i = 0;
  for (let j = 0; j < fruits.length; j++) {
    과일바구니[fruits[j]] = (과일바구니[fruits[j]] || 0) + 1;

    while (Object.keys(과일바구니).length > 2) {
      과일바구니[fruits[i]] -= 1;

      if (과일바구니[fruits[i]] === 0) {
        delete 과일바구니[fruits[i]];
      }

      i++;
    }

    과일개수 = Math.max(
      과일개수,
      Object.values(과일바구니).reduce((acc, cur) => acc + cur)
    );
  }

  return 과일개수;
}

console.log(totalFruit([1, 2, 3, 2, 2, 1]));
