```tsx
function isHappy(n: number): boolean {
  const set = new Set();
  const recursiveSum = (number: number, set: Set<number | unknown>) => {
    const sum = (number + "")
      .split("")
      .map((num) => (+num) ** 2)
      .reduce((acc, cur) => acc + cur);
    if (set.has(sum)) {
      return false;
    }

    if (sum === 1) {
      return true;
    } else {
      set.add(sum);
      return recursiveSum(sum, set);
    }
  };

  return recursiveSum(n, set);
}
```