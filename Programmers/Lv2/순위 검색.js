const combination = (info, map, score, start) => {
  const key = info.join("");
  const value = map[key];

  if (value) {
    map[key].push(score);
  } else {
    map[key] = [score];
  }

  for (let i = start; i < info.length; i++) {
    const currentInfo = [...info];
    currentInfo[i] = "-";

    combination(currentInfo, map, score, i + 1);
  }
};

const binarySearch = (map, key, score) => {
  const scores = map[key];

  if (!scores) {
    return 0;
  }

  let l = 0;
  let r = scores.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);

    if (+scores[mid] >= score) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return scores.length - l;
};

function solution(info, query) {
  const map = {};

  for (const inf of info) {
    const currentInfo = inf.split(" ");
    const score = currentInfo.pop();

    combination(currentInfo, map, score, 0);
  }

  for (const key in map) {
    map[key].sort((a, b) => a - b);
  }

  const answer = [];
  for (const q of query) {
    const [currentQuery, score] = q.replace(/ and /g, "").split(" ");

    answer.push(binarySearch(map, currentQuery, +score));
  }

  return answer;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	  통과 (0.78ms, 30.2MB)
 *  테스트 2 〉	  통과 (0.69ms, 30.3MB)
 *  테스트 3 〉	  통과 (0.65ms, 30MB)
 *  테스트 4 〉	  통과 (1.85ms, 30.5MB)
 *  테스트 5 〉	  통과 (2.91ms, 30.7MB)
 *  테스트 6 〉	  통과 (9.89ms, 34.3MB)
 *  테스트 7 〉	  통과 (3.98ms, 31.1MB)
 *  테스트 8 〉	  통과 (61.63ms, 37.8MB)
 *  테스트 9 〉	  통과 (57.23ms, 38.9MB)
 *  테스트 10 〉	통과 (59.08ms, 39.3MB)
 *  테스트 11 〉	통과 (3.00ms, 30.6MB)
 *  테스트 12 〉	통과 (9.57ms, 34.1MB)
 *  테스트 13 〉	통과 (4.10ms, 31.3MB)
 *  테스트 14 〉	통과 (33.53ms, 35.2MB)
 *  테스트 15 〉	통과 (29.20ms, 35.3MB)
 *  테스트 16 〉	통과 (3.00ms, 30.4MB)
 *  테스트 17 〉	통과 (8.65ms, 34.1MB)
 *  테스트 18 〉	통과 (30.23ms, 35.4MB)
 *  효율성  테스트
 *  테스트 1 〉	통과 (785.51ms, 106MB)
 *  테스트 2 〉	통과 (787.07ms, 105MB)
 *  테스트 3 〉	통과 (749.79ms, 98MB)
 *  테스트 4 〉	통과 (719.29ms, 97.5MB)
 * 채점 결과
 *  정확성: 40.0
 *  효율성: 60.0
 *  합계: 100.0 / 100.0
 */
