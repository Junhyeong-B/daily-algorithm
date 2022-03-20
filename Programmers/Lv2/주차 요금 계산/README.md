```jsx
const calculateTime = (a, b) => {
  const time1 = new Date(`2000-01-01 ${a}`).getTime();
  const time2 = new Date(`2000-01-01 ${b}`).getTime();
  return (time2 - time1) / 60000;
};

const calculatePay = (fees, time) => {
  const calculatedTime = time - fees[0] < 0 ? 0 : time - fees[0];
  const calculatedPay = Math.ceil(calculatedTime / fees[2]) * fees[3];
  return calculatedPay + fees[1];
};

function solution(fees, records) {
  const check = new Map();
  const pay = new Map();
  for (const record of records) {
    const [time, carNumber, log] = record.split(" ");

    switch (log) {
      case "IN":
        check.set(carNumber, time);
        break;
      case "OUT":
        const parkingTime = calculateTime(check.get(carNumber), time);
        check.delete(carNumber);
        pay.set(
          carNumber,
          pay.has(carNumber) ? +pay.get(carNumber) + +parkingTime : +parkingTime
        );
        break;
      default:
    }
  }

  if (check.size) {
    for (const [carNumber, time] of check) {
      const parkingTime = calculateTime(time, "23:59");
      check.delete(carNumber);
      pay.set(
        carNumber,
        pay.has(carNumber) ? +pay.get(carNumber) + +parkingTime : +parkingTime
      );
    }
  }

  const answer = [];
  for (const [carNumber, time] of pay) {
    answer.push([carNumber, calculatePay(fees, time)]);
  }

  return answer.sort((a, b) => +a[0] - +b[0]).map((arr) => arr[1]);
}
```