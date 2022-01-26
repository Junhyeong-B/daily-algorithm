function solution(orders, course) {
  const checkOrders = new Map();

  const DFS = (L, n, arr, word, lt, check) => {
    if (word.length < n) {
      return;
    }

    if (L === n) {
      const order = [...arr].sort().join("");
      checkOrders.set(
        order,
        checkOrders.has(order) ? checkOrders.get(order) + 1 : 1
      );
    } else {
      for (let i = 0; i < word.length; i++) {
        if (check[i] === 0 && i >= lt) {
          arr.push(word[i]);
          check[i] = 1;
          DFS(L + 1, n, arr, word, i, check);
          arr.pop();
          check[i] = 0;
        }
      }
    }
  };

  for (const order of orders) {
    const check = Array.from(Array(order.length + 1), () => 0);
    for (const crs of course) {
      DFS(0, crs, [], order, 0, check);
    }
  }

  let max = 0;
  const countMax = [];
  const answer = [];

  for (const crs of course) {
    max = 0;

    for (const [order, count] of checkOrders) {
      if (order.length !== crs) {
        continue;
      }

      max = Math.max(max, count);
    }
    countMax.push(max);
  }

  for (let i = 0; i < course.length; i++) {
    if (countMax[i] <= 1) {
      continue;
    }

    for (const [order, count] of checkOrders) {
      if (order.length !== course[i]) {
        continue;
      }

      if (count === countMax[i]) {
        answer.push(order);
      }
    }
  }

  return answer.sort();
}
