{
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.39ms, 30MB)
      테스트 2 〉	통과 (0.64ms, 29.9MB)
      테스트 3 〉	통과 (20.86ms, 41.1MB)
      테스트 4 〉	통과 (16.44ms, 36.5MB)
      테스트 5 〉	통과 (17.07ms, 36.5MB)
      테스트 6 〉	통과 (22.10ms, 41.3MB)
      테스트 7 〉	통과 (20.34ms, 41.4MB)
      테스트 8 〉	통과 (16.87ms, 36.4MB)
      테스트 9 〉	통과 (21.12ms, 41.2MB)
      테스트 10 〉	통과 (17.76ms, 37MB)
      테스트 11 〉	통과 (14.63ms, 36.7MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */

  const solution = (rows, columns, queries) => {
    const answer = [];
    const board = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: columns }, (_, c) => r * columns + c + 1)
    );

    const rotate = (query) => {
      const top = query[0] - 1;
      const bottom = query[2] - 1;
      const left = query[1] - 1;
      const right = query[3] - 1;
      const nums = [board[top][left]];

      for (let i = top; i < bottom; i++) {
        board[i][left] = board[i + 1][left];
        nums.push(board[i][left]);
      }

      for (let i = left; i < right; i++) {
        board[bottom][i] = board[bottom][i + 1];
        nums.push(board[bottom][i]);
      }

      for (let i = bottom; i > top; i--) {
        board[i][right] = board[i - 1][right];
        nums.push(board[i][right]);
      }

      for (let i = right; i > left; i--) {
        if (i === left + 1) {
          board[top][i] = nums[0];
          continue;
        }
        board[top][i] = board[top][i - 1];
        nums.push(board[top][i]);
      }

      answer.push(Math.min(...nums));
    };

    for (const query of queries) {
      rotate(query);
    }

    return answer;
  };
}
