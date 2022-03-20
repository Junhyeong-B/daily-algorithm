{
  /*
    풀이 과정:
      1. 좌우로 움직이는 것 제외하고 모든 알파벳을 위아래로 움직여서 "A...A"에서 name을 만드는 것을 reduce로 계산해 놓는다.
      2. 위에서 계산한 값에 좌우로 움직인 move 중 가장 적은 값을 더한 것이 답이 된다.
      3. 첫 번째 글자부터 시작해서 오른쪽으로 이동하며 A가 있을 때 되돌아가는 것,
         첫 번째 글자부터 시작해서 바로 왼쪽으로 이동하며 A가 있을 때 다시 되돌아 가는 것 2번 순회하였다.
      4. 모든 글자를 "i" index로 순회하면서 "j = i + 1"로 초기화하여 "j" index를 확인 해 "A" 이면 "j"에 1씩 더하여 계속 확인한다.
      5. j의 계산이 모두 끝나면 i + 1부터 j까지는 A이므로 이동하지 않아도 된다고 판단, 이를 "(전체 length - j) + i" 계산하면 i만큼 이동 후 (length - j)만큼 되돌아갔다고 해석할 수 있다.
      6. 이를 각 index마다 계산하면서 작은 값을 저장해 놓는다.
      7. 처음부터 바로 왼쪽으로 이동하는 것이 적게 이동할 수도 있으므로("JAZ" 같은 문자) 기준이 되는 name을 reverse 한 후 가장 마지막 글자를 앞으로 이동시킨다.("JAZ" => "JZA")
      8. 4~6번을 반복한다.
      9. 1번 과정(상하 이동 최소값), 4~8번 과정에서 구한 값(좌우 이동 최소값)을 더하여 반환한다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.18ms, 30.2MB)
      테스트 2 〉	통과 (0.13ms, 30MB)
      테스트 3 〉	통과 (0.15ms, 30.1MB)
      테스트 4 〉	통과 (0.16ms, 29.8MB)
      테스트 5 〉	통과 (0.16ms, 30.1MB)
      테스트 6 〉	통과 (0.26ms, 30.1MB)
      테스트 7 〉	통과 (0.12ms, 30.1MB)
      테스트 8 〉	통과 (0.14ms, 30.1MB)
      테스트 9 〉	통과 (0.15ms, 29.8MB)
      테스트 10 〉	통과 (0.15ms, 30.1MB)
      테스트 11 〉	통과 (0.13ms, 30.1MB)
      테스트 12 〉	통과 (0.12ms, 30.3MB)
      테스트 13 〉	통과 (0.18ms, 30MB)
      테스트 14 〉	통과 (0.18ms, 30.2MB)
      테스트 15 〉	통과 (0.17ms, 30.1MB)
      테스트 16 〉	통과 (0.15ms, 30MB)
      테스트 17 〉	통과 (0.19ms, 30.3MB)
      테스트 18 〉	통과 (0.16ms, 29.8MB)
      테스트 19 〉	통과 (0.12ms, 30.2MB)
      테스트 20 〉	통과 (0.36ms, 30MB)
      테스트 21 〉	통과 (0.16ms, 30.2MB)
      테스트 22 〉	통과 (0.15ms, 30.2MB)
      테스트 23 〉	통과 (0.17ms, 30.2MB)
      테스트 24 〉	통과 (0.14ms, 30.3MB)
      테스트 25 〉	통과 (0.18ms, 30.1MB)
      테스트 26 〉	통과 (0.19ms, 30.3MB)
      테스트 27 〉	통과 (0.11ms, 30MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (name) => {
    let nameArray = name.split("");
    const alphabetChangeCount = nameArray.reduce((acc, alpha) => {
      const alphaIndex = alpha.charCodeAt(0) - 65;
      return acc + (alphaIndex > 13 ? 26 - alphaIndex : alphaIndex);
    }, 0);

    let move = nameArray.length;
    const { length } = nameArray;

    for (let i = 0; i < length; i++) {
      let j = i + 1;
      while (nameArray[j] && nameArray[j] === "A") {
        j += 1;
      }
      move = Math.min(move, i + (length + i - j));
    }

    nameArray = nameArray.reverse();
    nameArray.unshift(nameArray.pop());

    for (let i = 0; i < length; i++) {
      let j = i + 1;
      while (nameArray[j] && nameArray[j] === "A") {
        j += 1;
      }
      move = Math.min(move, i + (length + i - j));
    }

    return alphabetChangeCount + move;
  };
}
