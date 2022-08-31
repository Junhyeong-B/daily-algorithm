function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  let execTime = 0;
  const citiesWithLowerCase = cities.map((city) => city.toLowerCase());
  const queue = [1, 2, 3];

  for (const city of citiesWithLowerCase) {
    const index = queue.indexOf(city);

    if (index === -1) {
      if (queue.length > cacheSize) {
        queue.shift();
      }
      execTime += 5;
    } else {
      queue.splice(index, 1);
      execTime += 1;
    }

    queue.push(city);
  }

  return execTime;
}

console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
