/**
 * P1: IOI | P2: IOIOI => O 가 몇개인지에 따라 Pn으로 갈림.
 * S를 순회하면서 3글자만 확인한다.
 * IOI일 경우 O 1개를 찾았으니 O의 개수를 가리키는 변수를 1 증가시키고 index를 2칸 전진시킨다.
 * 다음 순회로 이동하기 전, O를 찾은 개수만큼 N과 일치하면 Pn을 1개 찾은 것이므로 Pn의 개수 1개를 증가시키고, index가 2칸 증가했으므로 O의 개수를 하나 줄인다.
 * IOI가 아니면 그냥 index를 1칸 전진한다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
const S = input[2];

let answer = 0;
let i = 0;
let count = 0;
while (i < S.length) {
  if (S.slice(i, i + 3) === 'IOI') {
    i += 2;
    count++;
    if (count === N) {
      answer++;
      count--;
    }
  } else {
    i++;
    count = 0;
  }
}

console.log(answer);
