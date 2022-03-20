```jsx
const isPrime = (num) => {
  if (num % 2 === 0) {
    return num === 2;
  }

  for (let i = 3; i <= Math.ceil(num ** 0.5); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

function solution(n, k) {
  const conversedNumber = n.toString(k).split("0");
  let answer = 0;

  conversedNumber.forEach((num) => {
    if (isPrime(+num)) {
      answer++;
    }
  });

  return answer;
}
```