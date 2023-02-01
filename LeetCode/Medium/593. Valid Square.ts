{
  /**
   * Runtime 79 ms Beats 62.50%
   * Memory 45.1 MB Beats 12.50%
   */

  const getLength = (p1: number[], p2: number[]): number => {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  };

  const validSquare = (
    p1: number[],
    p2: number[],
    p3: number[],
    p4: number[]
  ): boolean => {
    const lengths = [
      getLength(p1, p2),
      getLength(p2, p3),
      getLength(p3, p4),
      getLength(p4, p1),
      getLength(p1, p3),
      getLength(p2, p4),
    ];

    let side = Infinity;
    let diagonal = 0;

    for (const length of lengths) {
      diagonal = Math.max(diagonal, length);
      side = Math.min(side, length);
    }

    const counts = lengths.reduce<Record<string, number>>((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

    return counts[diagonal] === 2 && counts[side] === 4;
  };

  console.log(
    validSquare([6987, -473], [6985, -473], [6986, -472], [6986, -474])
  ); // true
}
