/*
  정확성  테스트
    테스트 1 〉	통과 (0.11ms, 29.9MB)
    테스트 2 〉	통과 (0.12ms, 29.9MB)
    테스트 3 〉	통과 (0.12ms, 30.1MB)
    테스트 4 〉	통과 (2.97ms, 32.7MB)
    테스트 5 〉	통과 (0.08ms, 30.1MB)
    테스트 6 〉	통과 (0.08ms, 30.1MB)
    테스트 7 〉	통과 (0.19ms, 30MB)
    테스트 8 〉	통과 (0.24ms, 30MB)
    테스트 9 〉	통과 (0.21ms, 30.1MB)
    테스트 10 〉	통과 (0.26ms, 30MB)
    테스트 11 〉	통과 (0.47ms, 30MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(board, moves) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const column = moves[i] - 1;

    for (let row = 0; row < board.length; row++) {
      if (board[row][column] === 0) {
        continue;
      }

      const doll = board[row][column];
      board[row][column] = 0;

      if (!stack.length) {
        stack.push(doll);
      } else {
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          count += 2;
        } else {
          stack.push(doll);
        }
      }

      break;
    }
  }

  return count;
}
