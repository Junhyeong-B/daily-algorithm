const getCombination = (length) => {
  const nums = Array.from({ length }, (_, i) => i);
  const check = Array(length).fill(false);
  const combination = [];

  const dfs = (level, temp, check, index) => {
    if (level === length) {
      if (!temp.length) {
        return;
      }

      combination.push(temp);
    } else {
      for (let i = index; i < length; i++) {
        if (check[i]) {
          continue;
        }

        check[i] = true;
        dfs(level + 1, temp, check, i);
        dfs(level + 1, temp + nums[i], check, i);
        check[i] = false;
      }
    }
  };

  dfs(0, "", check, 0);

  combination.sort((a, b) => a - b);

  return combination;
};

const getKey = (relation, col) => {
  let key = "";
  for (let i = 0; i < col.length; i++) {
    key += relation[col[i]];
  }

  return key;
};

const checkIsTuple = (relation, col) => {
  const map = new Map();
  for (let i = 0; i < relation.length; i++) {
    const key = getKey(relation[i], col);
    if (map.get(key)) {
      return false;
    }

    map.set(key, true);
  }

  return true;
};

function solution(relation) {
  let count = 0;
  const column = relation[0].length;

  const combination = getCombination(column);
  const check = combination.reduce(
    (acc, cur) => ({ ...acc, [cur]: false }),
    {}
  );

  for (let i = 0; i < combination.length; i++) {
    if (!check[combination[i]] && checkIsTuple(relation, combination[i])) {
      const combinationKey = new RegExp(combination[i].split("").join(".*"));
      for (let j = 0; j < combination.length; j++) {
        if (check[combination[j]]) {
          continue;
        }

        if (combinationKey.test(combination[j])) {
          combination[j] = true;
        }
      }

      count++;
    }
  }

  return count;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.59ms, 30.1MB)
 *  테스트 2 〉	통과 (0.61ms, 30MB)
 *  테스트 3 〉	통과 (0.60ms, 30MB)
 *  테스트 4 〉	통과 (0.61ms, 29.8MB)
 *  테스트 5 〉	통과 (0.54ms, 30MB)
 *  테스트 6 〉	통과 (0.24ms, 30.1MB)
 *  테스트 7 〉	통과 (0.42ms, 30MB)
 *  테스트 8 〉	통과 (0.46ms, 30.1MB)
 *  테스트 9 〉	통과 (0.69ms, 30.2MB)
 *  테스트 10 〉통과 (0.76ms, 30MB)
 *  테스트 11 〉통과 (0.92ms, 30.1MB)
 *  테스트 12 〉통과 (15.76ms, 34.9MB)
 *  테스트 13 〉통과 (1.50ms, 30.1MB)
 *  테스트 14 〉통과 (0.54ms, 30MB)
 *  테스트 15 〉통과 (0.49ms, 30MB)
 *  테스트 16 〉통과 (0.35ms, 30MB)
 *  테스트 17 〉통과 (0.52ms, 29.9MB)
 *  테스트 18 〉통과 (18.24ms, 34.9MB)
 *  테스트 19 〉통과 (20.22ms, 34.7MB)
 *  테스트 20 〉통과 (18.20ms, 34.9MB)
 *  테스트 21 〉통과 (16.35ms, 34.9MB)
 *  테스트 22 〉통과 (16.43ms, 35MB)
 *  테스트 23 〉통과 (0.69ms, 30MB)
 *  테스트 24 〉통과 (16.81ms, 35.1MB)
 *  테스트 25 〉통과 (16.41ms, 35MB)
 *  테스트 26 〉통과 (16.16ms, 34.9MB)
 *  테스트 27 〉통과 (1.26ms, 30.2MB)
 *  테스트 28 〉통과 (1.38ms, 30.1MB)
 *
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
