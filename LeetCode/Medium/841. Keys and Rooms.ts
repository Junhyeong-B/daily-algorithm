/**
 * Runtime 74 ms Beats 91.80%
 * Memory 45.9 MB Beats 13.11%
 */

function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  const doors = Array.from({ length: n }, () => false);
  doors[0] = true;
  const check = Array.from({ length: n }, () => false);
  check[0] = true;

  const queue: number[] = [...rooms[0]];

  for (const key of rooms[0]) {
    check[key] = true;
  }

  while (queue.length) {
    const currentDoorKey = queue.shift() as number;
    if (currentDoorKey === 0 || doors[currentDoorKey]) {
      continue;
    }

    doors[currentDoorKey] = true;
    for (const key of rooms[currentDoorKey]) {
      if (check[key]) {
        continue;
      }

      check[key] = true;
      queue.push(key);
    }
  }

  return doors.every((door) => door);
}

console.log(canVisitAllRooms([[1], [2], [3], []])); // true
