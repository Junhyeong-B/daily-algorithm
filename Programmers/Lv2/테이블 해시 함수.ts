{
  const solution = (
    data: number[][],
    col: number,
    row_begin: number,
    row_end: number
  ): number => {
    data.sort((a, b) => {
      const sub = a[col - 1] - b[col - 1];
      if (sub === 0) {
        return b[0] - a[0];
      }
      return sub;
    });

    const S: number[] = [];
    for (let i = row_begin; i <= row_end; i++) {
      S.push(data[i - 1].reduce((acc, cur) => acc + (cur % i), 0));
    }

    return S.reduce((acc, cur) => acc ^ cur);
  };

  console.log(
    solution(
      [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
      ],
      2,
      2,
      3
    )
  ); // 4

  /**
    정확성  테스트
      테스트 1 〉  통과 (0.17ms, 33.4MB)
      테스트 2 〉  통과 (0.18ms, 33.4MB)
      테스트 3 〉  통과 (0.20ms, 33.4MB)
      테스트 4 〉  통과 (0.23ms, 33.8MB)
      테스트 5 〉  통과 (0.66ms, 35.4MB)
      테스트 6 〉  통과 (6.97ms, 83.3MB)
      테스트 7 〉  통과 (8.79ms, 89.1MB)
      테스트 8 〉  통과 (11.16ms, 89.1MB)
      테스트 9 〉  통과 (11.69ms, 89.1MB)
      테스트 10 〉 통과 (13.17ms, 88.4MB)
      테스트 11 〉 통과 (0.07ms, 33.4MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}
