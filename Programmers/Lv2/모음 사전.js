function solution(word) {
  let answer = 1;
  const dict = ["A", "E", "I", "O", "U"];
  const currentWord = ["A"];

  while (word !== currentWord.join("")) {
    switch (currentWord.join("").length) {
      case 1:
      case 2:
      case 3:
      case 4:
        currentWord.push("A");
        answer += 1;
        break;
      case 5:
        inner: for (let i = 4; i >= 0; i--) {
          if (currentWord[i] === "U") {
            currentWord.pop();
          } else {
            const alphaIndex = dict.indexOf(currentWord[i]);
            currentWord[i] = dict[alphaIndex + 1];
            break inner;
          }
        }
        answer += 1;
        break;
      default:
    }
  }

  return answer;
}
