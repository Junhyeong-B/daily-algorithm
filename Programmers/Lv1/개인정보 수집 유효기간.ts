{
  const splitPrivacy = (privacy: string): {
    year: number;
    month: number;
    day: number;
    kind: string;
  } => {
    const [date, kind] = privacy.split(" ");
    const [year, month, day] = date.split(".");
    return {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      kind,
    };
  }
  
  const solution = (
    today: string,
    terms: string[],
    privacies: string[]
  ): number[] =>{
    const answer: number[] = [];
    const termsInfo = terms.reduce((acc, cur) => {
      const [kind, validity] = cur.split(" ");
      return Object.assign(acc, {
        [kind]: Number(validity),
      });
    }, {});
  
    for (let i = 0; i < privacies.length; i++) {
      const privacyInfo = splitPrivacy(privacies[i]);
      privacyInfo.month += termsInfo[privacyInfo.kind];
      privacyInfo.day -= 1;
  
      if (privacyInfo.day === 0) {
        privacyInfo.day = 28;
        privacyInfo.month -= 1;
      }
  
      if (privacyInfo.month > 12) {
        privacyInfo.year += Math.floor(privacyInfo.month / 12);
        privacyInfo.month = privacyInfo.month % 12;
      }
  
      if (privacyInfo.month === 0) {
        privacyInfo.year -= 1;
        privacyInfo.month += 12;
      }
      
      if (
        new Date(today).getTime() >
        new Date(`${privacyInfo.year}.${privacyInfo.month}.${privacyInfo.day}`).getTime()
      ) {
        answer.push(i + 1);
      }
    }
  
    return answer;
  }
  
  console.log(
    solution(
      "2022.05.19",
      ["A 6", "B 12", "C 3"],
      ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
    )
  ); // [1, 3]
  
  /**
    정확성  테스트
      테스트 1 〉   통과 (0.24ms, 34MB)
      테스트 2 〉   통과 (0.30ms, 33.9MB)
      테스트 3 〉   통과 (0.28ms, 33.9MB)
      테스트 4 〉   통과 (0.31ms, 33.9MB)
      테스트 5 〉   통과 (0.29ms, 34MB)
      테스트 6 〉   통과 (0.49ms, 34MB)
      테스트 7 〉   통과 (0.45ms, 34MB)
      테스트 8 〉   통과 (0.56ms, 34MB)
      테스트 9 〉   통과 (0.61ms, 34MB)
      테스트 10 〉	통과 (0.60ms, 34MB)
      테스트 11 〉	통과 (0.57ms, 33.9MB)
      테스트 12 〉	통과 (0.75ms, 34.2MB)
      테스트 13 〉	통과 (0.75ms, 34.1MB)
      테스트 14 〉	통과 (0.70ms, 34MB)
      테스트 15 〉	통과 (0.68ms, 34MB)
      테스트 16 〉	통과 (0.81ms, 34.1MB)
      테스트 17 〉	통과 (0.82ms, 34.1MB)
      테스트 18 〉	통과 (0.83ms, 34.1MB)
      테스트 19 〉	통과 (0.84ms, 34.1MB)
      테스트 20 〉	통과 (0.90ms, 34.1MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}