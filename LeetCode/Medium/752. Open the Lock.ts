/**
 * Runtime 269 ms Beats 68.18%
 * Memory 67.1 MB Beats 6.82%
 */

function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  const queue: [string, number][] = [["0000", 0]];
  const seen = new Set<string>();

  for (const [currentKey, count] of queue) {
    if (dead.has(currentKey)) {
      continue;
    }

    if (currentKey === target) {
      return count;
    }

    for (const nextKey of getNextStep(currentKey)) {
      if (seen.has(nextKey)) {
        continue;
      }

      seen.add(nextKey);
      queue.push([nextKey, count + 1]);
    }
  }

  return -1;
}

function getNextStep(key: string) {
  const result: string[] = [];

  for (let i = 0; i < key.length; i++) {
    result.push(
      key.slice(0, i) + ((+key[i] + 1) % 10).toString() + key.slice(i + 1)
    );
    result.push(
      key.slice(0, i) + ((+key[i] + 9) % 10).toString() + key.slice(i + 1)
    );
  }

  return result;
}

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")); // 6
