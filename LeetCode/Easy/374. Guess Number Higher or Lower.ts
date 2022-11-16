{
  /**
   * Runtime 67 ms Beats 91.56%
   * Memory 42 MB Beats 98.70%
   */

  /**
   * Forward declaration of guess API.
   * @param {number} num   your guess
   * @return 	     -1 if num is higher than the picked number
   *			      1 if num is lower than the picked number
   *               otherwise return 0
   * var guess = function(num) {}
   */

  var guess = function (num: number): number {
    return num;
  };

  function guessNumber(n: number): number {
    const recursive = (low: number, high: number) => {
      const mid = Math.floor((low + high) / 2);
      const result = guess(mid);

      if (result === 0) {
        return mid;
      } else if (result === 1) {
        return recursive(mid + 1, high);
      } else if (result === -1) {
        return recursive(low, mid - 1);
      }
    };

    return recursive(0, n);
  }

  console.log(guessNumber(10)); // pick 6 => 6
}
