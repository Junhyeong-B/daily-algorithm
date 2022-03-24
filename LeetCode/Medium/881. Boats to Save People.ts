/*
  Runtime: 224 ms, faster than 90.91% of TypeScript online submissions for Boats to Save People.
  Memory Usage: 51.7 MB, less than 54.55% of TypeScript online submissions for Boats to Save People.
*/

function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);

  let minIndex = 0;
  let maxIndex = people.length - 1;
  let count = 0;

  while (minIndex <= maxIndex) {
    if (minIndex === maxIndex) {
      count += 1;
      break;
    }
    const minWeight = people[minIndex];
    const maxWeight = people[maxIndex];

    if (minWeight + maxWeight > limit) {
      count += 1;
      maxIndex -= 1;
    } else {
      count += 1;
      minIndex += 1;
      maxIndex -= 1;
    }
  }

  return count;
};