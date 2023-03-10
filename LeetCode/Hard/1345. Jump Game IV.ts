/**
 * Runtime 1148 ms Beats 40.91%
 * Memory 72.6 MB Beats 66.88%
 */
function minJumps(arr: number[]): number {
  const jumps = Array(arr.length).fill(-1);
  const graph = arr.reduce<Record<string, number[]>>((acc, cur, i) => {
    if (!acc[cur]) {
      acc[cur] = [];
    }
    acc[cur].push(i);
    return acc;
  }, {});
  jumps[0] = 0;
  const queue = [0];
  const lastIndex = arr.length - 1;

  while (queue.length) {
    const index = queue.shift()!;

    if (index === lastIndex) {
      return jumps[lastIndex];
    }

    if (arr[index] in graph) {
      for (const jumpIndex of graph[arr[index]]) {
        if (jumps[jumpIndex] === -1) {
          queue.push(jumpIndex);
          jumps[jumpIndex] = jumps[index] + 1;
        }
      }

      delete graph[arr[index]];
    }

    const prevIndex = index - 1;
    if (prevIndex >= 0 && jumps[prevIndex] === -1) {
      queue.push(prevIndex);
      jumps[prevIndex] = jumps[index] + 1;
    }

    const nextIndex = index + 1;
    if (nextIndex < arr.length && jumps[nextIndex] === -1) {
      queue.push(nextIndex);
      jumps[nextIndex] = jumps[index] + 1;
    }
  }
  return 0;
}

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])); // 3
