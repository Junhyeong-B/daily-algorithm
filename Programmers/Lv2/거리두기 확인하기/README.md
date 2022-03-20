```jsx
const checkRow = (place) => {
  return place.includes("POP") || place.includes("PP");
};

const checkColumn = (places) => {
  const placeArray = places.map((place) => place.split(""));
  const column = Array(5).fill("");

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      column[x] = placeArray[x][y];
    }

    if (checkRow(column.join(""))) {
      return true;
    }
  }

  return false;
};

const checkSquare = (places) => {
  const placeArray = places.map((place) => place.split(""));
  const n = 3;
  const dx = [1, 1, 0, 0, 1, 1];
  const dy = [1, 0, 0, 1, 1, 0];
  let place;

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      place = [];
      for (let i = 0; i < 6; i++) {
        place.push(placeArray[x + dx[i]][y + dy[i]]);
      }
      if (checkRow(place.join(""))) {
        return true;
      }
    }
  }

  return false;
};

function solution(places) {
  const answer = [];

  outer: for (const place of places) {
    for (const p of place) {
      if (checkRow(p)) {
        answer.push(0);
        continue outer;
      }
    }

    if (checkColumn(place)) {
      answer.push(0);
      continue outer;
    }

    if (checkSquare(place)) {
      answer.push(0);
      continue outer;
    }

    answer.push(1);
  }

  return answer;
}
```