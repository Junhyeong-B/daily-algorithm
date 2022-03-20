```tsx
const move = (n: number, start: string, to: string): void => {
  console.log(`${n}번을 ${start}에서 ${to}로 이동`);
};

const hanoi = (n: number, start: string, to: string, via: string): void => {
  if (n === 1) {
    move(1, start, to);
  } else {
    hanoi(n - 1, start, via, to);
    move(n, start, to);
    hanoi(n - 1, via, to, start);
  }
};

hanoi(4, "A", "C", "B");

/*
  1번을 A에서 B로 이동
  2번을 A에서 C로 이동
  1번을 B에서 C로 이동
  3번을 A에서 B로 이동
  1번을 C에서 A로 이동
  2번을 C에서 B로 이동
  1번을 A에서 B로 이동
  4번을 A에서 C로 이동
  1번을 B에서 C로 이동
  2번을 B에서 A로 이동
  1번을 C에서 A로 이동
  3번을 B에서 C로 이동
  1번을 A에서 B로 이동
  2번을 A에서 C로 이동
  1번을 B에서 C로 이동
*/
```