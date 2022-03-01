// flatten 함수 구현하기.
const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, [4, [5, 6], 7], [8, 9]]];

// 1차로 중첩된 배열만 flatten
const flatten = (array) => {
  return array.reduce((acc, cur) => acc.concat(cur), []);
};

console.log(flatten(arr1)); // [1, 2, 3, 4]

// 무한히 중첩될 수 있는 배열 flatten
const flattenRecursive = (array) => {
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(flattenRecursive(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);
};

console.log(flattenRecursive(arr2)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
