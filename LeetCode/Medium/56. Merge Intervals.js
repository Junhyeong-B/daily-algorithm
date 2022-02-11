/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const canMerge = (arr1, arr2) => {
  return arr2[0] <= arr1[1];
};

var merge = function (intervals) {
  const arr = [...intervals];
  for (let i = 0; i < intervals.length; i++) {
    arr[i] = [...intervals[i]];
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  let l = 0;
  let r = l + 1;

  while (r < arr.length) {
    if (canMerge(arr[l], arr[r])) {
      arr[l][0] = arr[l][0] < arr[r][0] ? arr[l][0] : arr[r][0];
      arr[l][1] = arr[l][1] < arr[r][1] ? arr[r][1] : arr[l][1];
      arr.splice(r, 1);
      continue;
    }

    if (r === arr.length - 1) {
      l++;
      r = l + 1;
    } else {
      r++;
    }
  }

  return arr;
};
