```jsx
const clickKeyPad = (keyPad, leftHand, rightHand, key, hand) => {
  const distanceToLeftHand =
    Math.abs(keyPad[leftHand][0] - keyPad[key][0]) +
    Math.abs(keyPad[leftHand][1] - keyPad[key][1]);
  const distanceToRightHand =
    Math.abs(keyPad[rightHand][0] - keyPad[key][0]) +
    Math.abs(keyPad[rightHand][1] - keyPad[key][1]);

  if (distanceToLeftHand === distanceToRightHand) {
    return hand === "left" ? "L" : "R";
  }

  return distanceToLeftHand > distanceToRightHand ? "R" : "L";
};

function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2],
    "*": [0, 3],
    0: [1, 3],
    "#": [2, 3],
  };
  let leftHand = "*";
  let rightHand = "#";
  let answer = "";

  for (const key of numbers) {
    if (key % 3 === 1) {
      answer += "L";
      leftHand = key;
    } else if (key % 3 === 0 && key !== 0) {
      answer += "R";
      rightHand = key;
    } else {
      const clickedHand = clickKeyPad(keyPad, leftHand, rightHand, key, hand);
      answer += clickedHand;
      if (clickedHand === "L") {
        leftHand = key;
      } else {
        rightHand = key;
      }
    }
  }

  return answer;
}
```