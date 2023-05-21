const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const dfs = (l, index, temp, nums, check, result) => {
  if (l === 6) {
    result.push(temp);
  } else {
    for (let i = index; i < nums.length; i++) {
      if (check[i]) {
        continue;
      }
      check[i] = true;
      dfs(
        l + 1,
        i + 1,
        temp === "" ? nums[i] : `${temp} ${nums[i]}`,
        nums,
        check,
        result
      );
      check[i] = false;
    }
  }
};

const result = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  }
  const [_, ...nums] = input[i].split(" ").map((n) => +n);
  const check = Array.from({ length: nums.length }, () => false);

  const rottoNums = [];
  dfs(0, 0, "", nums, check, rottoNums);
  result.push(rottoNums.join("\n"));
}

console.log(result.join("\n\n"));
