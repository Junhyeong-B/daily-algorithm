function solution(s) {
  if (!isNaN(s)) {
    return +s;
  }

  const english = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;

  for (let i = 0; i < 10; i++) {
    const reg = new RegExp(english[i], "g");
    answer = answer.replace(reg, i);
  }

  return +answer;
}
