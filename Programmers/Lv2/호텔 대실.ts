const convertTimeToNumber = (time: string) => {
  const [hour, minute] = time.split(':');
  return +hour * 60 + +minute;
};

function solution(book_time: string[][]) {
  const convertedTime = book_time
    .map((times) => {
      const [start, end] = times;
      return [convertTimeToNumber(start), convertTimeToNumber(end) + 10];
    })
    .sort((a, b) => a[0] - b[0]);

  const rooms: boolean[] = [];
  const onAirEndTimes: number[] = [];
  for (const [startTime, endTime] of convertedTime) {
    onAirEndTimes.push(endTime);

    onAirEndTimes.forEach((e, i) => {
      if (e <= startTime) {
        onAirEndTimes.splice(i, 1);
        rooms[rooms.indexOf(true)] = false;
      }
    });

    if (rooms.includes(false)) {
      rooms[rooms.indexOf(false)] = true;
    } else {
      rooms.push(true);
    }
  }

  return rooms.length;
}

console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ])
); // 3
